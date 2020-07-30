#ifndef TENSEAL_CONTEXT_TENSEALCONTEXT_H
#define TENSEAL_CONTEXT_TENSEALCONTEXT_H

#include "seal/seal.h"
#include "tenseal/cpp/context/sealcontext.h"
#include "tenseal/cpp/context/tensealencoder.h"
#include "tenseal/cpp/utils/threadpool.h"
#include "tenseal/proto/tensealcontext.pb.h"

namespace tenseal {

using namespace seal;
using namespace std;

/**
 * A store for keeping all the keys and parameters required to run an encrypted
 * computation, it wraps around SEALContext and keeps additional parameters and
 * objects that are needed during encryption, evaluation and decryption of
 *tensors. This should be the main object a user is required to create to use
 *encrypted tensors.
 **/
class TenSEALContext {
   public:
    /**
     * These are the objects needed for encryption, decryption and evaluation of
     * tensors respectively. Keeping them in a single objects reduces memory and
     * time for doing operations on encrypted tensors since we only need to
     * instantiate them once.
     **/
    shared_ptr<Encryptor> encryptor;
    shared_ptr<Decryptor> decryptor;
    shared_ptr<Evaluator> evaluator;

    /**
     * The way to instantiate TenSEALContext is through the Create function, it
     * makes sure to create an object and only share a pointer to it.
     *
     * Create a context from the encryption parameters.
     * @param[in] scheme: BFV or CKKS.
     * @param[in] poly_modulus_degree: The polynomial modulus degree.
     * @param[in] plain_modulus: The plaintext modulus.
     * @param[in] coeff_mod_bit_sizes: The bit-lengths of the primes to be/
     * @param[in] n_threads: Optional parameter for the size of the threadpool
     *dispatcher. generated.
     * @returns shared_ptr to a new TenSEALContext object.
     **/
    static shared_ptr<TenSEALContext> Create(scheme_type scheme,
                                             size_t poly_modulus_degree,
                                             uint64_t plain_modulus,
                                             vector<int> coeff_mod_bit_sizes,
                                             optional<uint> n_threads = {});
    /**
     * Create a context from an input stream.
     * @param[in] stream
     * @param[in] n_threads: Optional parameter for the size of the threadpool
     *dispatcher.
     * @returns shared_ptr to a new TenSEALContext object.
     **/
    static shared_ptr<TenSEALContext> Create(istream& stream,
                                             optional<uint> n_threads = {});
    /**
     * Create a context from a serialized protobuffer.
     * @param[in] input: Serialized protobuffer.
     * @param[in] n_threads: Optional parameter for the size of the threadpool
     *dispatcher.
     * @returns shared_ptr to a new TenSEALContext object.
     **/
    static shared_ptr<TenSEALContext> Create(const std::string& input,
                                             optional<uint> n_threads = {});
    /**
     * Create a context from a protobuffer.
     * @param[in] input: The protobuffer.
     * @param[in] n_threads: Optional parameter for the size of the threadpool
     *dispatcher.
     * @returns shared_ptr to a new TenSEALContext object.
     **/
    static shared_ptr<TenSEALContext> Create(const TenSEALContextProto& input,
                                             optional<uint> n_threads = {});
    /**
     * @returns a pointer to the public key.
     **/
    shared_ptr<PublicKey> public_key() const;
    /**
     * @returns a pointer to the secret key.
     * @throws invalid_argument if the context is public.
     **/
    shared_ptr<SecretKey> secret_key() const;
    /**
     * @returns a pointer to the relinearization keys.
     * @throws invalid_argument if the keys are missing.
     **/
    shared_ptr<RelinKeys> relin_keys() const;
    /**
     * @returns a pointer to the Galois keys.
     * @throws invalid_argument if the keys are missing.
     **/
    shared_ptr<GaloisKeys> galois_keys() const;
    /**
     * Generate Galois keys using the existing secret key.
     * @throws invalid_argument if the context is public.
     **/
    void generate_galois_keys();
    /**
     * Generate Galois keys using a custom secret key.
     * @param[in] secret_key.
     **/
    void generate_galois_keys(const SecretKey& secret_key);
    /**
     * Generate Galois keys from a serialized protobuffer.
     * @param[in] input: Serialized string.
     **/
    void generate_galois_keys(const std::string&);
    /**
     * Generate Relinearization keys using the existing secret key.
     * @throws invalid_argument if the context is public.
     **/
    void generate_relin_keys();
    /**
     * Generate Relinearization keys using a custom secret key.
     **/
    void generate_relin_keys(const SecretKey& secret_key);
    /**
     * Generate Relinearization keys from a serialized protobuffer.
     **/
    void generate_relin_keys(const std::string&);
    /**
     * Generate Galois and Relinearization keys if needed, then destroy the
     *_secret_key and set it to nullptr. The existing Galois/Relinearization
     *keys will be kept.
     * @param[in] generate_galois_keys: if True,the Galois keys will be
     *generated.
     * @param[in] generate_relin_keys: if True,the Relinearization keys will be
     *generated.
     **/
    void make_context_public(bool generate_galois_keys,
                             bool generate_relin_keys);
    /**
     * @returns true if the secret_key is null.
     **/
    bool is_public() const;
    /**
     * @returns true if the secret_key is not null.
     **/
    bool is_private() const;
    /**
     * @returns the wrapped SEALContext object.
     **/
    shared_ptr<SEALContext> seal_context();
    /**
     * Template encoding function for the encoders.
     **/
    template <typename T, typename... Args>
    void encode(Args&&... args) {
        encoder_factory->encode<T>(std::forward<Args>(args)...);
    }
    /**
     * Template decoder function for the encoders.
     **/
    template <class T, class R>
    void decode(const Plaintext& pt, R& result) {
        encoder_factory->decode<T>(pt, result);
    }
    /**
     * Template slot_count function for the encoders.
     **/
    template <class T>
    size_t slot_count() {
        return encoder_factory->slot_count<T>();
    }
    /**
     * Set the global scale for the CKKS scheme.
     * @param[in] scale
     **/
    void global_scale(double scale);
    /**
     * Get the global scale for the CKKS scheme.
     * throws invalid_argument if the scale is not set.
     **/
    double global_scale() const;
    /**
     * Get the global scale for the CKKS scheme.
     **/
    double safe_global_scale() const;
    /**
     * Switch on/off automatic relinearization, rescaling, and mod switching.
     * @param[in] status: on/off.
     * TODO: take into account possible parallel computation using this
     **/
    void auto_relin(bool status);
    void auto_rescale(bool status);
    void auto_mod_switch(bool status);
    /**
     * Get the state for automatic relinearization, rescaling, or mod switching.
     **/
    bool auto_relin();
    bool auto_rescale();
    bool auto_mod_switch();
    /**
     * Read a serialized protobuffer from an input stream and populate the
     *current context.
     * @param[in] input stream.
     **/
    void load(std::istream& stream);
    /**
     * Populate the current context from a serialized protobuffer.
     * @param[in] input serialized protobuffer.
     **/
    void load(const std::string& input);
    /**
     * Save the current context to a serialized protobuffer and write it to an
     *output stream.
     * @param[in] output stream.
     **/
    bool save(std::ostream& stream) const;
    /**
     * Save the current context to a serialized protobuffer.
     * @returns serialized protobuffer.
     **/
    std::string save() const;
    /**
     * @returns a deepcopy of the current context.
     **/
    std::shared_ptr<TenSEALContext> copy() const;
    /**
     * Load/Save a protobuffer for the current context.
     **/
    void load_proto(const TenSEALContextProto& buffer);
    TenSEALContextProto save_proto() const;
    /**
     * @returns the encryption params of the current context.
     **/
    const EncryptionParameters& parms() { return _parms; }
    /**
     * @returns true if the contexts are identical.
     **/
    bool equals(const std::shared_ptr<TenSEALContext>& other);
    /**
     * @returns a pointer to the threadpool dispatcher
     **/
    shared_ptr<sync::ThreadPool> dispatcher() { return _dispatcher; }
    size_t dispatcher_size() { return _threads; }

   private:
    EncryptionParameters _parms;
    shared_ptr<SEALContext> _context;
    shared_ptr<PublicKey> _public_key;
    shared_ptr<SecretKey> _secret_key;
    shared_ptr<RelinKeys> _relin_keys;
    shared_ptr<GaloisKeys> _galois_keys;
    shared_ptr<TenSEALEncoder> encoder_factory;

    shared_ptr<sync::ThreadPool> _dispatcher;
    uint _threads;

    /**
     * Switches for automatic relinearization, rescaling, and modulus switching
     **/
    enum {
        flag_auto_relin = 1 << 0,
        flag_auto_rescale = 1 << 1,
        flag_auto_mod_switch = 1 << 2,
    };
    uint8_t _auto_flags =
        flag_auto_relin | flag_auto_rescale | flag_auto_mod_switch;

    TenSEALContext(EncryptionParameters parms, optional<uint> n_threads);
    TenSEALContext(istream& stream, optional<uint> n_threads);
    TenSEALContext(const std::string& stream, optional<uint> n_threads);
    TenSEALContext(const TenSEALContextProto& proto, optional<uint> n_threads);

    void base_setup(EncryptionParameters parms);
    void dispatcher_setup(optional<uint> n_threads);
    void keys_setup(optional<PublicKey> public_key = {},
                    optional<SecretKey> secret_key = {},
                    bool generate_relin_keys = true,
                    bool generate_galois_keys = false);
};
}  // namespace tenseal
#endif

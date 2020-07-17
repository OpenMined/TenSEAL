#ifndef TENSEAL_UTILS_PROTO_H
#define TENSEAL_UTILS_PROTO_H

namespace tenseal {

template <class Proto>
size_t proto_bytes_size(const Proto& in) {
#if GOOGLE_PROTOBUF_VERSION < 3006001
    return in.ByteSize();
#else
    return in.ByteSizeLong();
#endif
}
}  // namespace tenseal
#endif

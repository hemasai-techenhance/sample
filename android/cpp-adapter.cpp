#include <jni.h>
#include "react-native-multiplier.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_multiplier_MultiplierModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return multiplier::multiply(a, b);
}

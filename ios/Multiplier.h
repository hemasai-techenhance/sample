#ifdef __cplusplus
#import "react-native-multiplier.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNMultiplierSpec.h"

@interface Multiplier : NSObject <NativeMultiplierSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Multiplier : NSObject <RCTBridgeModule>
#endif

@end

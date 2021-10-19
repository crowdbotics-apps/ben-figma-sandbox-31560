import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fcf/3af2/375f75dcb8e0b7e076fab95c8fce91a9"
        }}
        style={styles.ImageBackground_211_83}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3856/a38f/c8c9a230698032957200f5b9f3bf9d19"
        }}
        style={styles.ImageBackground_211_84}
      />
      <View style={styles.View_211_85}>
        <View style={styles.View_211_86} />
      </View>
      <View style={styles.View_211_87}>
        <Text style={styles.Text_211_87}>SIGN UP</Text>
      </View>
      <View style={styles.View_211_88}>
        <View style={styles.View_211_89}>
          <View style={styles.View_211_90}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1962/fb93/d69c758c41a1daa54da1f64601a60b2a"
              }}
              style={styles.ImageBackground_211_91}
            />
            <View style={styles.View_211_92}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                }}
                style={styles.ImageBackground_211_93}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69c8/66fe/b7093012a3f63e223aad4fbfc752b245"
                }}
                style={styles.ImageBackground_211_97}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                }}
                style={styles.ImageBackground_211_101}
              />
              <View style={styles.View_211_106}>
                <View style={styles.View_211_107}>
                  <Text style={styles.Text_211_107}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1962/fb93/d69c758c41a1daa54da1f64601a60b2a"
            }}
            style={styles.ImageBackground_211_108}
          />
        </View>
        <View style={styles.View_211_110}>
          <View style={styles.View_211_111}>
            <View style={styles.View_211_112}>
              <Text style={styles.Text_211_112}>Or connect with</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb13/3588/0626983307fc802ca8a7a444479dd44c"
            }}
            style={styles.ImageBackground_211_113}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2da1/4a41/211db850b18460660d0212f2dd5da890"
            }}
            style={styles.ImageBackground_211_114}
          />
        </View>
      </View>
      <View style={styles.View_211_115}>
        <View style={styles.View_211_116}>
          <Text style={styles.Text_211_116}>Already have an account? </Text>
        </View>
        <View style={styles.View_211_117}>
          <Text style={styles.Text_211_117}>Sign In</Text>
        </View>
      </View>
      <View style={styles.View_211_118}>
        <View style={styles.View_211_119} />
        <View style={styles.View_211_120}>
          <Text style={styles.Text_211_120}>SIGN UP</Text>
        </View>
      </View>
      <View style={styles.View_211_162}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/495b/f76c/46ff1f5981417413d107b3b8166d8551"
          }}
          style={styles.ImageBackground_211_163}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c63/a8f7/7fb8ed39fb49366703cd4c97c6a73918"
        }}
        style={styles.ImageBackground_211_168}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2713/079e/a30ed613f39afd89ef26708d320f320a"
        }}
        style={styles.ImageBackground_211_176}
      />
      <View style={styles.View_374_163}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e949/3a59/5b1e90b3d5fd7b2dbd1a180f935ef38f"
          }}
          style={styles.ImageBackground_374_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4b8/f109/710d47ca936dd4a98c03aa28038c4d2d"
          }}
          style={styles.ImageBackground_374_167}
        />
      </View>
      <View style={styles.View_374_170}>
        <Text style={styles.Text_374_170}>E-Mail</Text>
      </View>
      <View style={styles.View_374_171} />
      <View style={styles.View_374_172}>
        <Text style={styles.Text_374_172}>Username</Text>
      </View>
      <View style={styles.View_374_173}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14d/a4ba/99fa1b3b4126f28e32d9614cc1daf928"
          }}
          style={styles.ImageBackground_374_174}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3b/e2fe/6ea0c2a3f45b57a1b0f3679d7e6702a4"
          }}
          style={styles.ImageBackground_374_178}
        />
      </View>
      <View style={styles.View_374_182} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56e3/955f/a3d70bb34e22d7255fbb51a659f746f8"
        }}
        style={styles.ImageBackground_374_183}
      />
      <View style={styles.View_374_186}>
        <Text style={styles.Text_374_186}>Password</Text>
      </View>
      <View style={styles.View_374_187}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca38/1450/0ee9b0415234da165a4d1755f13c08b2"
          }}
          style={styles.ImageBackground_374_188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9245/f702/fcfa25e3a6c85f4c07d5802ad4b70970"
          }}
          style={styles.ImageBackground_374_191}
        />
      </View>
      <View style={styles.View_374_194} />
      <View style={styles.View_374_195}>
        <Text style={styles.Text_374_195}>Confirm Password</Text>
      </View>
      <View style={styles.View_374_196}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca38/1450/0ee9b0415234da165a4d1755f13c08b2"
          }}
          style={styles.ImageBackground_374_197}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9245/f702/fcfa25e3a6c85f4c07d5802ad4b70970"
          }}
          style={styles.ImageBackground_374_200}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56e3/955f/a3d70bb34e22d7255fbb51a659f746f8"
        }}
        style={styles.ImageBackground_374_203}
      />
      <View style={styles.View_374_206} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_211_83: {
    width: wp("178%"),
    minWidth: wp("178%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-66%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_211_84: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_211_85: {
    width: wp("36%"),
    height: hp("1%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_211_86: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_211_87: {
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_211_87: {
    color: "rgba(238, 238, 238, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_88: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_211_89: {
    width: wp("100%"),
    height: hp("95%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_211_90: {
    width: wp("100%"),
    height: hp("95%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_91: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_211_92: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_211_93: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_211_97: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_211_101: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_211_106: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_211_107: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_211_107: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  ImageBackground_211_108: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  View_211_110: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("85%")
  },
  View_211_111: {
    width: wp("25%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_211_112: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_211_112: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_211_113: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_211_114: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("1%")
  },
  View_211_115: {
    width: wp("55%"),
    height: hp("3%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_211_116: {
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_211_116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_117: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_211_117: {
    color: "rgba(165, 129, 215, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_211_118: {
    width: wp("79%"),
    height: hp("6%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_211_119: {
    width: wp("79%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(131, 89, 191, 1)"
  },
  View_211_120: {
    width: wp("78%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_211_120: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_211_162: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("91%")
  },
  ImageBackground_211_163: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_211_168: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_211_176: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("90%"),
    resizeMode: "cover"
  },
  View_374_163: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_374_164: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_167: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_374_170: {
    width: wp("12%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_374_170: {
    color: "rgba(238, 238, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_374_171: {
    width: wp("79%"),
    height: hp("6%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(77, 44, 123, 1)",
    borderColor: "rgba(238, 238, 238, 1)",
    borderWidth: 1
  },
  View_374_172: {
    width: wp("20%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_374_172: {
    color: "rgba(238, 238, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_374_173: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_374_174: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_178: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_374_182: {
    width: wp("79%"),
    height: hp("6%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(77, 44, 123, 1)",
    borderColor: "rgba(238, 238, 238, 1)",
    borderWidth: 1
  },
  ImageBackground_374_183: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_374_186: {
    width: wp("18%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_374_186: {
    color: "rgba(238, 238, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_374_187: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_374_188: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_191: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_374_194: {
    width: wp("79%"),
    height: hp("6%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(77, 44, 123, 1)",
    borderColor: "rgba(238, 238, 238, 1)",
    borderWidth: 1
  },
  View_374_195: {
    width: wp("35%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_374_195: {
    color: "rgba(238, 238, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_374_196: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_374_197: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_200: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_203: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_374_206: {
    width: wp("79%"),
    height: hp("6%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(77, 44, 123, 1)",
    borderColor: "rgba(238, 238, 238, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

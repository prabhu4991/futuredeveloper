import { ScrollView, Text, Image,  } from "react-native";
import { FlatList,View } from "react-native-gesture-handler";
export default function App() {
    const Data = [

        {
            id: 0,
            title: "1 item",
        },

    {
            id: 1,
            title: "2 item",
        },
        {
            id:2,
            title:" 3 item",
        },
        {
            id:4,
            title:"3 item",
        }
    ];
    return (
        <ScrollView>
            <Image
                source={{
                    uri: "https://as1.ftcdn.net/v2/jpg/00/30/69/86/1000_F_30698643_nQ78zqEFCtCUA77bgNaFRpR34FcIuJIY.jpg",
                }}
                style={{
                    height: 300,
                    width: 300,
                }}
            />
            <Text style={{
                textAlign: "center",
            }}>
                R14 bike
            </Text>

            <Image
                source={{
                    uri: "https://as1.ftcdn.net/v2/jpg/06/47/91/64/1000_F_647916489_ZaGm9oSTFD2oS2FYRFiWISnF0Wb7ARp4.jpg",
                }}
                style={{
                    height: 300,
                    width: 300,
                }}
            />


            <Text
                style={{
                    textAlign: "center",

                }}
            >
                R15 bike
            </Text>
            <Image
                source={{
                    uri: "https://t4.ftcdn.net/jpg/05/67/03/25/360_F_567032519_HWWeha72w4FlDHtpJCDOP82gCMjubrN0.jpg",
                }}
                style={{
                    height: 300,
                    width: 300,
                }}

            />

            <Text
                style={{
                    textAlign: "center",
                }}

            >R 16 BIKE </Text>


            <Image
                source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/030/600/865/non_2x/motorbike-racer-with-ink-art-generative-ai-photo.jpg",
                }}
                style={{
                    height: 300,
                    width: 300,
                }}

            />

            <Text
                style={{
                    textAlign: "center",
                }}

            >R17 BIKE </Text>


            <Image
                source={{
                    uri: "https://t4.ftcdn.net/jpg/05/61/84/99/360_F_561849982_WPaorxHFFl88Q11JSrjyJl3pMautPvgf.jpg",
                }}
                style={{
                    height: 300,
                    width: 300,
                }}
            />
            <Text> R18 BIKE </Text>

            <Image

                source={{
                    uri: "https://thumbs.dreamstime.com/z/biker-motorcycle-motorbike-fire-rider-bike-chopper-flames-creative-concept-ai-generated-biker-motorbike-269981108.jpg",
                }}
                style={{
                    height: 300,
                    width: 300,
                }}

            />
            <Text>R29v Bike </Text>
        </ScrollView>
    );
}
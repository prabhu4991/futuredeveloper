import {View,Text,Image} from "react-native";
export default function App(){
    return(
<View>


<Image
source={{
    uri:"https://as1.ftcdn.net/v2/jpg/00/30/69/86/1000_F_30698643_nQ78zqEFCtCUA77bgNaFRpR34FcIuJIY.jpg",
}}
style={{
    height:300,
    width:300,
}}
/>
<Text style={{
    textAlign:"center",
}}>
    R14 bike
</Text>

<Image 
source={{
    uri:"https://as1.ftcdn.net/v2/jpg/06/47/91/64/1000_F_647916489_ZaGm9oSTFD2oS2FYRFiWISnF0Wb7ARp4.jpg",
}}
style={{
    height:300,
    width:300,
}}
/>

<Text
style={{
    textAlign:"center",

}}
>
    R15 bike 
</Text>
</View>
    );
}
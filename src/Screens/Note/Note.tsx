import { useRef, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { RichEditor, RichToolbar, actions } from "react-native-pell-rich-editor";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Note({navigation}){
    // const data = useSelector(state=>state)
    // console.log(data);
    const [title,setTitle] = useState('')
const RichText = useRef(); //reference to the RichEditor component
    return(
        <>
        <SafeAreaView>
        <View>
            <TextInput
                placeholder="Title"  
                onChangeText={setTitle}          
            ></TextInput>
        </View>
        <View>
            <ScrollView>
            <RichEditor
   ref={RichText} // from useRef()
   onChange={setText}
   placeholder="Write your cool content here :)"
   androidHardwareAccelerationDisabled={true}
   style={styles.richTextEditorStyle}
   initialHeight={250}
 />
            </ScrollView>
        </View>
 <RichToolbar
   editor={RichText}
   selectedIconTint="#873c1e"
   iconTint="#312921"
   actions={[
     actions.insertImage,
     actions.setBold,
     actions.setItalic,
     actions.insertBulletsList,
     actions.insertOrderedList,
     actions.insertLink,
     actions.setStrikethrough,
     actions.setUnderline,
   ]}
   style={styles.richToolbarStyle}
/>
        {/* <View>
            <CustomIcon></CustomIcon>
        </View> */}
        </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    richTextEditorStyle:{
        flex:1
    },
    richToolbarStyle:{
        position:'absolute',
        // bottom:0
    },
    editor:{

    }
})
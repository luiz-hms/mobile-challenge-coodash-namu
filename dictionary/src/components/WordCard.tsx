import { Pressable, PressableProps, Text, StyleSheet } from "react-native";

type WordCardProps = PressableProps & {
    
        word: string,
        favorite: number
    
}
export function Wordcard({word, favorite, ...rest}: WordCardProps) {
    return(
        <Pressable {...rest}>
            <Text>{word} - {favorite.toString()}</Text>
        </Pressable>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"#CECECE",
        padding: 24,
        borderRadius:5,
        gap:12,
        flexDirection: "row"
    }
});
import { TouchableOpacity, Text } from "react-native";
import styles from "./style"

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text>{props.buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default Button;
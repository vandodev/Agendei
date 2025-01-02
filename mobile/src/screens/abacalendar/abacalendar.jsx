import {FlatList, Text, View} from 'react-native';
import {styles} from "./abacalendar.style.js";
import { appointments } from '../../constants/data.js';

function AbaCalendar() {
    return <View style={styles.container}>
        <FlatList data={appointments} 
            keyExtractor={(appoints)=> appoints.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Text>{item.service}</Text>                           
                
            }}
        />
    </View>
}

export default AbaCalendar;
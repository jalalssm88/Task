import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';

export const TaskTwo = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const getPosts = async ()=> {
        setLoading(true)
        //Replace the IP adress with yours
        let response = await fetch('http://192.168.1.103:5000/retrieve-img')
        let parsed = response.json()
        parsed.then(res=>{
            setPosts(res)
            setLoading(false)
        })
    }
    useEffect(()=>{
        getPosts()
    }, [])
    return (
        <View>
            <View style={styles.header}>
                <Text style={{ color: '#fff' }}>Task Two</Text>
            </View>
            <View style={styles.container}>
                
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={posts}
                    ListEmptyComponent={()=>{
                        return(
                            <View style={{paddingTop:300}}>
                                {
                                    isLoading?<ActivityIndicator color="blue" size="large"/>:<Text>No data found</Text>
                                }
                            </View>
                        )
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={{paddingTop:10}}>
                                
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold'
                                }}>{item.name}
                                </Text>
                                <View style={{
                                    height: 350,
                                    width: 370,
                                    marginTop:5,
                                    marginBottom:5
                                }}>
                                    <Image
                                        style={{height:'100%', width:'100%', borderRadius:5}}
                                        source={{ uri: item.image_url }}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View>
                                    <Text style={{fontSize:18}}>{item.brand}</Text>
                                </View>
                                <Text style={{fontSize:16}}>{item.description}</Text>
                                <View style={{
                                    borderBottomWidth:1,
                                    borderBottomColor:'gray',
                                    marginTop:10
                                }}/>

                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

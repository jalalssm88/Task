import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

export const TaskOne = (props) => {

    let formFields = {
        examintaion: '',
        clinical_history: '',
        techniques: '',
        findings: '',
        impressions: ''
    }
    let formFieldsHeight = {
        examintaionHeight: '',
        clinical_historyHeight: '',
        techniquesHeight: '',
        findingsHeight: '',
        impressionsHeight: ''
    }
    const [formData, setFormData] = useState(formFields)
    const [formDataHeight, setExaminationHeight] = useState(formFieldsHeight)
    const [smooth_tannic, setSmoothTannic] = useState(0)
    const [dry_sweet, setDrySweet] = useState(0)

    const submit = () => {
        let final_data = [{ ...formData, smoothTannic: smooth_tannic, drySweet: dry_sweet }]
        console.log('form data', final_data)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#fff' }}>Task One</Text>
            </View>
            <ScrollView>
                <View style={{
                    // backgroundColor:'black'
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingHorizontal: 15,

                }}>
                    <View style={styles.fieldWraper}>
                        <View style={styles.circleContainer}>
                            <View style={[styles.circle,
                            !formData.examintaion ? {
                            } : {
                                    backgroundColor: 'blue',
                                    borderColor: 'blue'
                                }]}></View>
                            <View style={[styles.leftBorder, {
                                height: Math.max(55, formDataHeight.examintaionHeight + 18)
                            }, !formData.examintaion ? {
                                borderLeftColor: 'gray'
                            } : {
                                    borderLeftColor: 'blue'
                                }]} />
                        </View>

                        <View style={{ width: 260 }}>
                            <Text>Examination</Text>
                            <TextInput
                                style={[styles.inputFiled,
                                {
                                    height: Math.max(45, formDataHeight.examintaionHeight)
                                }]}
                                multiline={true}
                                value={formData.examintaion}
                                onContentSizeChange={(event) => {
                                    setExaminationHeight(
                                        {
                                            ...formDataHeight, examintaionHeight: event.nativeEvent.contentSize.height
                                        })
                                }}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, examintaion: text })
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.fieldWraper}>
                        <View style={styles.circleContainer}>
                            <View style={[styles.circle,
                            !formData.clinical_history ? {
                            } : {
                                    backgroundColor: 'blue',
                                    borderColor: 'blue'
                                }]}></View>
                            <View style={[styles.leftBorder, {
                                height: Math.max(50, formDataHeight.clinical_historyHeight + 18)
                            }, !formData.clinical_history ? {
                                borderLeftColor: 'gray'
                            } : {
                                    borderLeftColor: 'blue'
                                }]} />
                        </View>

                        <View style={{ width: 260 }}>
                            <Text>clinical history</Text>
                            <TextInput
                                style={[styles.inputFiled,
                                {
                                    height: Math.max(45, formDataHeight.clinical_historyHeight)
                                }]}
                                multiline={true}
                                value={formData.clinical_history}

                                onContentSizeChange={(event) => {
                                    setExaminationHeight(
                                        {
                                            ...formDataHeight, clinical_historyHeight: event.nativeEvent.contentSize.height
                                        })
                                }}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, clinical_history: text })
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.fieldWraper}>
                        <View style={styles.circleContainer}>
                            <View style={[styles.circle,
                            !formData.techniques? {
                            } : {
                                    backgroundColor: 'blue',
                                    borderColor: 'blue'
                                }]}></View>
                            <View style={[styles.leftBorder, {
                                height: Math.max(55, formDataHeight.techniquesHeight + 18)
                            }, !formData.techniques ? {
                                borderLeftColor: 'gray'
                            } : {
                                    borderLeftColor: 'blue'
                                }]} />
                        </View>

                        <View style={{ width: 260 }}>
                            <Text>Technique</Text>
                            <TextInput
                                multiline={true}
                                style={[styles.inputFiled,
                                {
                                    height: Math.max(45, formDataHeight.techniquesHeight)
                                }]}
                                value={formData.techniques}
                                onContentSizeChange={(event) => {
                                    setExaminationHeight(
                                        {
                                            ...formDataHeight, techniquesHeight: event.nativeEvent.contentSize.height
                                        })
                                }}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, techniques: text })
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.fieldWraper}>
                        <View style={styles.circleContainer}>
                            <View style={[styles.circle,
                            !formData.findings ? {
                            } : {
                                    backgroundColor: 'blue',
                                    borderColor: 'blue'
                                }]}></View>
                            <View style={[styles.leftBorder, {
                                height: Math.max(55, formDataHeight.findingsHeight + 18)
                            }, !formData.findings ? {
                                borderLeftColor: 'gray'
                            } : {
                                    borderLeftColor: 'blue'
                                }]} />
                        </View>

                        <View style={{ width: 260 }}>
                            <Text>Findings</Text>
                            <TextInput
                                style={[styles.inputFiled,
                                {
                                    height: Math.max(45, formDataHeight.findingsHeight)
                                }]}
                                multiline={true}
                                value={formData.findings}
                                onContentSizeChange={(event) => {
                                    setExaminationHeight(
                                        {
                                            ...formDataHeight, findingsHeight: event.nativeEvent.contentSize.height
                                        })
                                }}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, findings: text })
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.fieldWraper}>
                        <View style={styles.circleContainer}>
                            <View style={[styles.circle,
                            !formData.impressions ? {
                            } : {
                                    backgroundColor: 'blue',
                                    borderColor: 'blue'
                                }]}></View>
                            <View style={[styles.leftBorder, {
                                height: Math.max(55, formDataHeight.impressionsHeight + 18)
                            }, !formData.impressions ? {
                                borderLeftColor: 'gray'
                            } : {
                                    borderLeftColor: 'blue'
                                }]} />
                        </View>
                        <View style={{ width: 260 }}>
                            <Text>Impressions</Text>
                            <TextInput
                                style={[styles.inputFiled,
                                {
                                    height: Math.max(45, formDataHeight.impressionsHeight)
                                }]}
                                multiline={true}
                                value={formData.impressions}
                                onContentSizeChange={(event) => {
                                    setExaminationHeight(
                                        {
                                            ...formDataHeight, impressionsHeight: event.nativeEvent.contentSize.height
                                        })
                                }}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, impressions: text })
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', borderTopWidth: 1, marginTop: 10, paddingTop: 10 }}>
                        <View style={styles.sliderLabel}>
                            <Text>Smooth</Text>
                        </View>
                        <View>
                            <Slider
                                value={smooth_tannic}
                                style={{
                                    width: 300,
                                    height: 40,
                                }}
                                minimumValue={0}
                                maximumValue={5}
                                step={1}
                                thumbTintColor="red"
                                minimumTrackTintColor="#000000"
                                maximumTrackTintColor="#000000"
                                onValueChange={(change => {
                                    setSmoothTannic(change)
                                })}
                            />
                        </View>
                        <View style={styles.sliderLabel}>
                            <Text>Tannic</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <View style={styles.sliderLabel}>
                            <Text>Dry</Text>
                        </View>
                        <View>
                            <Slider
                                value={dry_sweet}
                                style={{
                                    width: 300,
                                    height: 40,
                                }}
                                minimumValue={0}
                                maximumValue={5}
                                step={1}
                                thumbTintColor="red"
                                minimumTrackTintColor="#000000"
                                maximumTrackTintColor="#000000"
                                onValueChange={(change => {
                                    setDrySweet(change)
                                })}
                            />
                        </View>
                        <View style={styles.sliderLabel}>
                            <Text>Sweet</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => submit()} style={styles.button}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fieldWraper: {
        flexDirection: 'row',
        width: '100%',

        marginBottom: 8,
    },
    circleContainer: {
        width: 30,
        alignItems: 'center'
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 5
    },
    leftBorder: {
        borderLeftWidth: 1,
    },
    inputFiled: {
        width: 330,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginTop: 15,
        paddingTop: 8,
        paddingBottom: 8
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderLabel: {
        height: 40,
        width: 40,
        justifyContent: 'center'
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'blue',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

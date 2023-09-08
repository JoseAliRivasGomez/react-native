/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title="Modal Screen" />

            <Button
                title="Abrir modal"
                onPress={ () => setIsVisible(true) }
            />

            <Modal
                animationType="fade"
                visible={ isVisible }
                transparent={ true }
            >

                {/* Background negro */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    {/* Contenido del modal */}
                    <View style={{
                        width: 200,
                        height: 200,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5,
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Modal</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20, color: 'black' }}>Cuerpo del modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={ () => setIsVisible(false) }
                        />
                    </View>


                </View>

            </Modal>


        </View>
    );
};

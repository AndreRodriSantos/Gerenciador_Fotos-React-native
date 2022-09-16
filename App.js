import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import CameraDialog from './app/components/CameraDialog';
import PictureList from './app/components/PictureList';


export default class App extends Component {
  state = {
    pictureList: [

      { id: '1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4GDqF9sr93F-wPdnKbNhjlI402rVCT8JOg&usqp=CAU' },
      { id: '2', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4GDqF9sr93F-wPdnKbNhjlI402rVCT8JOg&usqp=CAU' },
      { id: '3', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4GDqF9sr93F-wPdnKbNhjlI402rVCT8JOg&usqp=CAU' },
      { id: '4', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4GDqF9sr93F-wPdnKbNhjlI402rVCT8JOg&usqp=CAU' },
    ],
    isModalOpen: false
  }

  onPictureSelect = (item) => {

  }

  openModal = () => { 
    this.setState({isModalOpen: true})
  }

  closeModal = (response) => {
    this.setState({isModalOpen: false});
   }

  render() {

    const { state } = this;

    return (
      <View style={styles.container}>
        <PictureList list={state.pictureList} onClick={this.onPictureSelect} />
        <View style={styles.footer}>
          <Button
            onPress={this.openModal}
            title="Nova Foto"
            color="#0062ac"
          />
        </View>
        <CameraDialog isOpen={state.isModalOpen} onClose={this.closeModal}/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  footer: {
    padding: 15,
    backgroundColor: '#999',
    width: '100%',
    textAlign: 'center'
  }
})

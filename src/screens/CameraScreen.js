import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../constants';

const CameraScreen = () => {
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  let camera;
  const takePicture = async () => {
    try {
      const photo = await camera.takePictureAsync();
      setPreviewImage(photo.uri);
      setShowPreview(!showPreview);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <View style={styles.cameraContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" hidden />
      {showPreview ? (
        <ImageBackground
          source={{uri: previewImage}}
          style={styles.imagePreview}
        />
      ) : (
        <RNCamera
          style={styles.camera}
          type={type}
          flashMode={flashMode}
          ref={r => {
            camera = r;
          }}>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() =>
                setFlashMode(
                  flashMode === RNCamera.Constants.FlashMode.off
                    ? RNCamera.Constants.FlashMode.on
                    : RNCamera.Constants.FlashMode.off,
                )
              }>
              {flashMode === RNCamera.Constants.FlashMode.off ? (
                <Ionicons
                  style={styles.icon}
                  name="flash-off-outline"
                  size={27}
                  color={colors.light}
                />
              ) : (
                <Ionicons
                  style={styles.icon}
                  name="flash-outline"
                  size={27}
                  color={colors.light}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setType(
                  type === RNCamera.Constants.Type.back
                    ? RNCamera.Constants.Type.front
                    : RNCamera.Constants.Type.back,
                )
              }>
              <MaterialCommunityIcons
                style={styles.icon}
                name="rotate-3d-variant"
                size={27}
                color={colors.light}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={takePicture}
            activeOpacity={0.7}
            style={styles.captureButton}
          />
        </RNCamera>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  iconContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  captureButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.light,
    bottom: 40,
  },
  imagePreview: {flex: 1},
});

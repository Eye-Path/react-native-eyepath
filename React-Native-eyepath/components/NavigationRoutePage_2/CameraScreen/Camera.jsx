import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const Camera = ({photoPath}) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const sendImage = async () => {
      if (!photoPath) {
        console.log('❌ 사진 경로 없음, 업로드 생략');
        setError('No image path provided.');
        return;
      }

      const formData = new FormData();
      formData.append('file', {
        uri: photoPath,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });

      console.log('📤 업로드할 이미지 경로:', photoPath);
      console.log('📦 FormData 준비됨:', formData);

      try {
        const response = await axios.post(
          'https://eyepath.duckdns.org/analyze',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        setMessage(response.data.message);
      } catch (err) {
        console.log('❌ 서버 응답 에러:', err?.response?.data || err.message);
        setError(err.message || 'Upload failed');
      }
    };

    sendImage();
  }, [photoPath]);

  return (
    <>
      <View style={styles.container}>
        {error ? <Text>Error : {error}</Text> : <Text>msg : {message}</Text>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
});

export default Camera;

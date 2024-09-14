import { StyleSheet, Platform, ImageBackground } from 'react-native';

export default function HomeScreen() {
  // function downloadFile(path) {
  //   return (
  //     <div>
  //       <a href={path} download>Click to download</a>
  //     </div>
  //   )
  // }
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    // validate file input
    const file = event.target.files[0];
    const isNII = file.name.split('.').pop() == 'nii';
    if (file && !isNII) {
      alert('Please upload a .nii file.');
      event.target.value = '';
      return;
    }
    console.log('yay!')
    // run model on input and navigate to next page with visualization

    // be able to download file
    return null;
  }
  return (
    <ImageBackground source={'../../assets/images/brain.jpg'} resizeMode="cover" style={styles.image} >
      <div style={styles.container}>
        <h1 style={styles.title}>3D Brain Visualizer</h1>
        <label htmlFor="file-upload" style={styles.uploadButton} className="file-button">
          Upload file
        </label>
        <input id="file-upload" type="file" style={styles.fileUpload} onChange={handleFileChange}></input>
    </div>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    width: '100%',
    // border: '3px solid green',
    // padding: 10,
    // backgroundColor: '#D3D3D3',
    // backgroundImage: 'url(../../assets/images/brain.jpg)',
    // backgroundSize: 'cover',
    // opacity: 0.5,
  },
  title: {
    fontFamily: 'Uber Move Text, sans-serif',
    fontSize: 60,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    marginTop: 70,
    letterSpacing: 1,
  },
  fileUpload: {
    display: 'none',
  },
  uploadButton: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Uber Move Text, sans-serif',
    fontSize: 25,
    cursor: 'pointer',
    marginLeft: Platform.OS === 'web' ? '42%' : '50%',
    marginRight: Platform.OS === 'web' ? '42%' : '50%',
    borderRadius: 25,
    border: '3px solid #fff',
    marginBottom: 70,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

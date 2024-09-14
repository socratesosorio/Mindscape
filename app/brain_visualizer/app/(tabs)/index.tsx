import { StyleSheet, Platform } from 'react-native';

export default function HomeScreen() {
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
    return null;
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>3D Brain Visualizer</h1>
      <label htmlFor="file-upload" style={styles.uploadButton} className="file-button">
        Upload .nii file
      </label>
      <input id="file-upload" type="file" style={styles.fileUpload} onChange={handleFileChange}></input>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    width: '100%',
  },
  title: {
    fontFamily: 'Uber Move Text, sans-serif',
    fontSize: 60,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
    marginTop: 40,
    letterSpacing: 1,
  },
  fileUpload: {
    display: 'none',
  },
  uploadButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Uber Move Text, sans-serif',
    fontSize: 25,
    cursor: 'pointer',
    marginLeft: Platform.OS === 'web' ? '43%' : '50%',
    marginRight: Platform.OS === 'web' ? '43%' : '50%',
    borderRadius: 25,
    border: '2px solid #73AD21',
  },
});

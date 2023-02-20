
import './App.css';
import ParentComponent from './functionComponent/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <label>First Name</label>
            <input type="text" name="fname" size="30px"/><br/><br/>
            <label>Last Name</label>
            <input type="text" name="lname" size="30px"/><br/><br/>
            <label>Age</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="age" name="lname" size="30px"/><br/><br/>
            <label>Address</label>&nbsp;&nbsp;&nbsp;
            <textarea cols="30" rows="5"></textarea><br/><br/>
            <label>Gender</label>
            <input type="radio" name="gender" checked="true"/>Male
            <input type="radio" name="gender"/>Female<br/><br/>
            <label>Hobbies</label>
            <input type="checkbox" name="hobbies"/>Swimming
            <input type="checkbox" name="hobbies"/>Music
            <input type="checkbox" name="hobbies"/>Dance
            <input type="checkbox" name="hobbies"/>Cricket <br/>  <br/>         
            <label>Preffered city</label>
            <select>
                <option value="Kochi">Kochi</option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Calicut">Calicut</option>
            </select><br/>
            <label>Requires transportation</label>
            <label class="switch">
                <input type="checkbox"/><span class="slider"></span></label><br/>
            <a href="nav.html" class="terms-link">Click here to download and view terms and conditions</a><br/><br/><br/>    
            <ParentComponent />
    </div>
  );
}

export default App;

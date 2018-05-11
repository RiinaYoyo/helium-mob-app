import Expo from "expo";

//Get and export database connection
const DataBase =Expo.SQLite.openDatabase('ars.db')

export default DataBase;
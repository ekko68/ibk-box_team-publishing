import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();


// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BA10101 from "./pages/BA10101";
import BA10102 from "./pages/BA10102";
import BA10202 from "./pages/BA10202";
import BA10301 from "./pages/BA10301";
import BA10302 from "./pages/BA10302";
import BA10303 from "./pages/BA10303";
import BA10304 from "./pages/BA10304";
import BA10305 from "./pages/BA10305";
import BA10306 from "./pages/BA10306";
import BA10307 from "./pages/BA10307";
import BA10401 from "./pages/BA10401";
import BA10402 from "./pages/BA10402";
import BA10403 from "./pages/BA10403";
import BA10501 from "./pages/BA10501";
import BA10502 from "./pages/BA10502";
import BA10503 from "./pages/BA10503";
import BA10601 from "./pages/BA10601";
import BA10701 from "./pages/BA10701";
import BA10801 from "./pages/BA10801";
import BA10802 from "./pages/BA10802";
import BA10803 from "./pages/BA10803";
import NoPage from "./pages/NoPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      lighter:'#ECF5FF',
      main: '#3882D8',
      contrastText: '#ffffff',

    },
    secondary: {

      light: '#3882D8',
      main: '#0055a2',
    },
    tertiary:{
      main: '#0099da',
    },
    inProgress:{
      main: '#BEBBC9',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f15c21',
      light: '#FF8081',
    },
    warning: {
      main: '#ffd800',
      dark: '#ff8400',
      light: '#FDFB03'
    },
    info: {
      main: '#1e2f3f',
    },
    text: {
      primary: '#333333',
      sub: '#666666',
      contrastText: '#fff',
    },
    background: {
      default: '#f8f8f8',
      white: '#fff',
      tableOddRow: '#F9FBFE',
    },
    disabled:{
      main: '#bbbbbb',
      light: '#EAE9F1',
      lighter: '#F8F8F8',
    },
    divider: 'rgba(41,41,45,0.2)',
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
      raisedSecondary: {
        color: 'white',
      },
    },

  },

  typography: {
    fontFamily:[
      'Source Han Sans K',
      'sans-serif',
    ].join(','),
    h1:{
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2:{
      fontSize: '1.25rem',
    },
    h3:{
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h4:{
      fontSize: '1.125rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  },

});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ba10101" element={<BA10101 />} />
            <Route path="ba10102" element={<BA10102 />} />
            <Route path="ba10202" element={<BA10202 />} />
            <Route path="ba10301" element={<BA10301 />} />
            <Route path="ba10302" element={<BA10302 />} />
            <Route path="ba10303" element={<BA10303 />} />
            <Route path="ba10304" element={<BA10304 />} />
            <Route path="ba10305" element={<BA10305 />} />
            <Route path="ba10306" element={<BA10306 />} />
            <Route path="ba10307" element={<BA10307 />} />
            <Route path="ba10401" element={<BA10401 />} />
            <Route path="ba10402" element={<BA10402 />} />
            <Route path="ba10403" element={<BA10403 />} />
            <Route path="ba10501" element={<BA10501 />} />
            <Route path="ba10502" element={<BA10502 />} />
            <Route path="ba10503" element={<BA10503 />} />
            <Route path="ba10601" element={<BA10601 />} />
            <Route path="ba10701" element={<BA10701 />} />
            <Route path="ba10801" element={<BA10801 />} />
            <Route path="ba10802" element={<BA10802 />} />
            <Route path="ba10803" element={<BA10803 />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
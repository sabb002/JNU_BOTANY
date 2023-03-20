//External imports
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

//Internal imports

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import Questions from "./pages/Questions";
import Research from "./pages/Research";
import Notes from "./pages/Notes";

import Copyright from "./components/Copyright";

import "./Global.css";

import Year from "./pages/questions/Year";

import FirstSemester from "./pages/questions/firstYear/FirstSemester";
import FirstSemester_2 from "./pages/questions/secondYear/FirstSemester";
import FirstSemester_3 from "./pages/questions/thirdYear/FirstSemester";

import SecondSemester from "./pages/questions/firstYear/SecondSemester";
import SecondSemester_2 from "./pages/questions/secondYear/SecondSemester";
import SecondSemester_3 from "./pages/questions/thirdYear/SecondSemester";

import SubjectRelatedQ from "./pages/SubjectRelatedQ";

import BOT1101 from "./Data/course/BOT1101.json";
import BOT1102 from "./Data/course/BOT1102.json";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="faculty" element={<Faculty />} />

        <Route path="questions" element={<Questions />}>
          <Route path="first" element={<Year />}>
            <Route path="1stSemester" element={<FirstSemester />} />
            <Route path="2ndSemester" element={<SecondSemester />} />
          </Route>

          <Route path="second" element={<Year />}>
            <Route path="1stSemester" element={<FirstSemester_2 />} />
            <Route path="2ndSemester" element={<SecondSemester_2 />} />
          </Route>

          <Route path="third" element={<Year />}>
            <Route path="1stSemester" element={<FirstSemester_3 />} />
            <Route path="2ndSemester" element={<SecondSemester_3 />} />
          </Route>

          <Route path="*" element={<Navigate to="/questions" />} />
        </Route>

        {/* separate page for questions of each course */}

        {/*First Year */}
        {/*================================ */}
        <Route
          path="questions/first/1stSemester/BOT1101"
          element={
            <SubjectRelatedQ
              course="BOT-1101"
              filepath="BOT1101"
              courseQ={BOT1101}
            />
          }
        />
        <Route
          path="questions/first/1stSemester/BOT1102"
          element={
            <SubjectRelatedQ
              course="BOT-1102"
              filepath="BOT1102"
              courseQ={BOT1102}
            />
          }
        />
        <Route
          path="questions/first/1stSemester/BOT1103"
          element={<SubjectRelatedQ course="BOT-1103" filepath="BOT1103" />}
        />
        <Route
          path="questions/first/1stSemester/BOT1104"
          element={<SubjectRelatedQ course="BOT-1104" filepath="BOT1104" />}
        />
        <Route
          path="questions/first/1stSemester/BOT1105"
          element={<SubjectRelatedQ course="BOT-1105" filepath="BOT1105" />}
        />

        <Route
          path="questions/first/2ndSemester/BOT1201"
          element={<SubjectRelatedQ course="BOT-1201" filepath="BOT1201" />}
        />
        <Route
          path="questions/first/2ndSemester/BOT1202"
          element={<SubjectRelatedQ course="BOT-1202" filepath="BOT1202" />}
        />
        <Route
          path="questions/first/2ndSemester/BOT1203"
          element={<SubjectRelatedQ course="BOT-1203" filepath="BOT1203" />}
        />
        <Route
          path="questions/first/2ndSemester/BOT1204"
          element={<SubjectRelatedQ course="BOT-1204" filepath="BOT1204" />}
        />

        {/*================================ */}

        {/*Second Year */}
        {/*================================ */}
        <Route
          path="questions/second/1stSemester/BOT2101"
          element={<SubjectRelatedQ course="BOT-2101" filepath="BOT2101/" />}
        />
        <Route
          path="questions/second/1stSemester/BOT2102"
          element={<SubjectRelatedQ course="BOT-2102" filepath="BOT2102/" />}
        />
        <Route
          path="questions/second/1stSemester/BOT2103"
          element={<SubjectRelatedQ course="BOT-2103" filepath="BOT2103/" />}
        />
        <Route
          path="questions/second/1stSemester/BOT2104"
          element={<SubjectRelatedQ course="BOT-2104" filepath="BOT2104/" />}
        />
        <Route
          path="questions/second/1stSemester/BOT2105"
          element={<SubjectRelatedQ course="BOT-2105" filepath="BOT2105/" />}
        />
        <Route
          path="questions/second/2ndSemester/BOT2201"
          element={<SubjectRelatedQ course="BOT-2201" filepath="BOT2201/" />}
        />
        <Route
          path="questions/second/2ndSemester/BOT2202"
          element={<SubjectRelatedQ course="BOT-2202" filepath="BOT2202/" />}
        />
        <Route
          path="questions/second/2ndSemester/BOT2203"
          element={<SubjectRelatedQ course="BOT-2203" filepath="BOT2203/" />}
        />
        <Route
          path="questions/second/2ndSemester/BOT2204"
          element={<SubjectRelatedQ course="BOT-2204" filepath="BOT2204/" />}
        />
        <Route
          path="questions/second/2ndSemester/BOT2205"
          element={<SubjectRelatedQ course="BOT-2205" filepath="BOT2205/" />}
        />
        <Route
          path="questions/second/2ndSemester/BOT2206"
          element={<SubjectRelatedQ course="BOT-2206" filepath="BOT2206/" />}
        />
        {/*================================ */}

        {/*Third Year */}
        {/*================================ */}
        <Route
          path="questions/third/1stSemester/BOT3101"
          element={<SubjectRelatedQ course="BOT-3101" filepath="BOT3101/" />}
        />
        <Route
          path="questions/third/1stSemester/BOT3102"
          element={<SubjectRelatedQ course="BOT-3102" filepath="BOT3102/" />}
        />
        <Route
          path="questions/third/1stSemester/BOT3103"
          element={<SubjectRelatedQ course="BOT-3103" filepath="BOT3103/" />}
        />
        <Route
          path="questions/third/1stSemester/BOT3104"
          element={<SubjectRelatedQ course="BOT-3104" filepath="BOT3104/" />}
        />
        <Route
          path="questions/third/1stSemester/BOT3105"
          element={<SubjectRelatedQ course="BOT-3105" filepath="BOT3105/" />}
        />
        <Route
          path="questions/third/1stSemester/BOT3106"
          element={<SubjectRelatedQ course="BOT-3106" filepath="BOT3106/" />}
        />

        <Route
          path="questions/third/2ndSemester/BOT3201"
          element={<SubjectRelatedQ course="BOT-3201" filepath="BOT3201/" />}
        />
        <Route
          path="questions/third/2ndSemester/BOT3202"
          element={<SubjectRelatedQ course="BOT-3202" filepath="BOT3202/" />}
        />
        <Route
          path="questions/third/2ndSemester/BOT3203"
          element={<SubjectRelatedQ course="BOT-3203" filepath="BOT32013/" />}
        />
        <Route
          path="questions/third/2ndSemester/BOT3204"
          element={<SubjectRelatedQ course="BOT-3204" filepath="BOT3204/" />}
        />
        <Route
          path="questions/third/2ndSemester/BOT3205"
          element={<SubjectRelatedQ course="BOT-3205" filepath="BOT3205/" />}
        />
        <Route
          path="questions/third/2ndSemester/BOT3206"
          element={<SubjectRelatedQ course="BOT-3206" filepath="BOT3206/" />}
        />
        {/*================================ */}

        <Route path="research" element={<Research />} />
        <Route path="notes" element={<Notes />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router"

// Screens
import HomeScreen from "../screens/home"
import ContactMeScreen from "../screens/contact"
import ToMeetScreen from "../screens/to-meet"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/to-meet" element={<ToMeetScreen/>}/>
            <Route path="/contact-me" element={<ContactMeScreen/>}/>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
    )
}
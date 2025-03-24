import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
    const [user, setUser] = useState(null);
const BaseUrl="https://educase-e96i.onrender.com"
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                 alert("Please Login again");
                return;
            }
        const response = await axios.get(`${BaseUrl}/userinfo`, {headers: { Authorization: `Bearer ${token}` }});
            setUser(response.data);
            }catch(error){
                console.log("Error fetching user info:",error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Account Settings</h2>
            <div className="flex items-center space-x-4">
                <img src="https://via.placeholder.com/80" alt="Profile" className="w-16 h-16 rounded-full border-2 border-blue-500"/>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{user?.name}</h3>
                    <p className="text-gray-600">{user?.email}</p>
                </div>
            </div>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, nulla a pellentesque faucibus.
            </p>
        </div>
    </div>
    );
};

export default Profile;

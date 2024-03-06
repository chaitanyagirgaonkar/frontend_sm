import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from 'axios'
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useRefreshToken from "../../hooks/useRefreshToken";

function User() {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const { setAuth } = useAuth()
    const axiosPrivate = useAxiosPrivate();
    const refresh = useRefreshToken()
    const location = useLocation()
    useEffect(() => {
        axiosPrivate.get('/v1/users/current-user')
            .then((res) => {

                setUser(res.data.data)

            })
            .catch((err) => {
                console.log(err);
                navigate('/login', { state: { from: location }, replace: true })
            })
    }, [])

    const handleLogout = () => {
        axios.post('/v1/users/logout')
            .then((res) => {
                setAuth({})
                // console.log(res);
                navigate('/')
            })
            .catch((err) => (console.log(err)))
    }

    return (
        <>
            {user.username ? (
                <div className="bg-white border border-blue-500 rounded-xl  p-3  m-3 relative">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <FaUserCircle className="text-blue-500" size={34} />
                        <div className="flex flex-col justify-center items-center gap-1">
                            <h1 className="text-black items-center ">{user.username}</h1>
                            <h2 className="text-black text-wrap">{user.email}</h2>
                        </div>
                        <div>
                            <button className="bg-blue-500 rounded-md hover:bg-blue-600 py-2 px-4 text-white" onClick={handleLogout}>
                                Logout
                            </button>
                            {/* <button className="bg-blue-500 rounded-md hover:bg-blue-600 py-2 px-4 text-white" onClick={() => refresh()}>
                                refresh
                            </button> */}
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )
            }
        </>
    );
}

export default User;

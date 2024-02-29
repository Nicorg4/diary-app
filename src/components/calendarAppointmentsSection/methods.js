const apiUrl = process.env.REACT_APP_API_URL;

export const createNewAppointment = async (appointment) => {
    const response = await fetch(apiUrl + 'createAppointment',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ appointment })
    });
    if(!response.ok){
        throw new Error("Error while trying to create a new event");
    }

}
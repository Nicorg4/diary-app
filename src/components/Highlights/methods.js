const apiUrl = process.env.REACT_APP_API_URL;


const dateFormatter = (appointments) => {
    return appointments.map(appointment => {
        const date = new Date(appointment.date);
        date.setHours(date.getHours() + 3);
        const formattedTime = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        return { ...appointment, formattedTime };
    });
}

export const fetchTodayAppointments = async () => {
    try{
        const response = await fetch(apiUrl + 'getAllFromToday');
        if(!response.ok){
            throw new Error("Error while trying to fetch today appointments");
        }
        const appointments = await response.json();

        const formattedAppointments = dateFormatter(appointments.todayAppointments);
        const sortedAppointments = formattedAppointments.sort((a, b) => new Date(a.date) - new Date(b.date));
        return sortedAppointments
    }catch(error){
        console.error(error);
    }
}

export const fetchThisMonthAppointments = async () => {
    try{
        const response = await fetch(apiUrl + 'getAllFromThisMonth');
        if(!response.ok){
            throw new Error("Error while trying to fetch this month appointments");
        }
        const appointments = await response.json();
        
        const formattedAppointments = appointments.thisMonthAppointments.map(appointment => {
            const date = new Date(appointment.date);
            date.setHours(date.getHours() + 3);
            const formattedTime = `${date.getDate()}/${date.getMonth() + 1} ${date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`;
            return { ...appointment, formattedTime };
        });
        
        const sortedAppointments = formattedAppointments.sort((a, b) => new Date(a.date) - new Date(b.date));

        return sortedAppointments

    }catch(error) {
        console.error(error)
    }

}
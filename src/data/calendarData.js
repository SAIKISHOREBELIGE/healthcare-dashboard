export const calendarMonth = {
  month: 'October',
  year: 2023,
  days: Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    appointments: []
  }))
};

// Add appointments to specific days
calendarMonth.days[4].appointments = [{ time: '09:00' }];
calendarMonth.days[10].appointments = [{ time: '11:00' }, { time: '15:00' }];
calendarMonth.days[17].appointments = [{ time: '13:00' }];
calendarMonth.days[24].appointments = [{ time: '09:00' }, { time: '13:00' }];

export const upcomingAppointments = [
  {
    id: 1,
    title: 'Dentist',
    doctor: 'Dr. Sarah Johnson',
    time: '09:00 AM',
    date: 'October 5, 2023',
    icon: 'tooth'
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Michael Chen',
    time: '11:00 AM',
    date: 'October 11, 2023',
    icon: 'activity'
  }
];
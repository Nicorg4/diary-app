import alarmSound from '../../assets/sound.m4a'

export const playAlarmSound = () => {
    const audio = new Audio(alarmSound);
    audio.play();
  };
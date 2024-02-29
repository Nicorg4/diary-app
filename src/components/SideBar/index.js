import React from 'react'
import { SideBarContainer, LinksContainer, Link, Button } from './components'
import { FaWhatsapp, FaFutbol, FaYoutube, FaTwitch, FaSpotify, FaUniversity  } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill, PiRecordFill  } from "react-icons/pi";
import { GrOnedrive } from "react-icons/gr";

const SideBar = () => {

    const recordScreen = async () => {
        try{
            const media = await navigator.mediaDevices.getDisplayMedia({
                audio: true,
                video: { frameRate: { ideal: 60 } }
            })
            const mediarecorder = new MediaRecorder(media, {
                mimeType: 'video/webm;codecs=vp8,opus'
            })
            mediarecorder.start()
            
            const [video] = media.getVideoTracks()
            video.addEventListener("ended", () => {
                mediarecorder.stop()
            })
            
            mediarecorder.addEventListener("dataavailable", (e) => {
                const link = document.createElement("a")
                link.href = URL.createObjectURL(e.data)
                link.download = "captura.webm"
                link.click()
            })
        }catch(error){
            console.error("Permission denied");
        }
    }

  return (
    <SideBarContainer>
        <LinksContainer>
            <Link href='https://web.whatsapp.com/' target='blank' iconColor={'#0cc243'}>
                <FaWhatsapp/>
            </Link>
            <Link href='https://www.youtube.com/feed/subscriptions' target='blank' iconColor={'#ff0000'}>
                <FaYoutube/>
            </Link>
            <Link href='https://outlook.live.com/mail/0/' target='blank' iconColor={'#0364b8'}>
                <PiMicrosoftOutlookLogoFill/>
            </Link>
            <Link href='https://onedrive.live.com/?id=root&cid=872480704090376D' target='blank' iconColor={'#28a8ea'}>
                <GrOnedrive/>
            </Link>
            <Link href='https://www.twitch.tv/' target='blank' iconColor={'#a970ff'}>
                <FaTwitch />
            </Link>
            <Link href='https://open.spotify.com/' target='blank' iconColor={'#1ed760'}>
                <FaSpotify/>
            </Link>
            <Link href='https://www.futbin.com/' target='blank' iconColor={'#55cca2'}>
                <FaFutbol/>
            </Link>
            <Link href='https://autogestion.uca.edu.ar/acceso' target='blank' iconColor={'#1d3b6f'}>
                <FaUniversity/>
            </Link>
            <Button onClick={recordScreen} iconColor={'#d14f4d'}>
                <PiRecordFill/>
            </Button>

        </LinksContainer>
    </SideBarContainer>
  )
}

export default SideBar
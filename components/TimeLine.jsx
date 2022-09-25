import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import styles from './styles/TimeLine.module.css'
import { FaBaby, FaSchool, FaGraduationCap, FaPen } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'

const TimeLine =() => {
  return (
    <div className={styles.ContentsWrapper} id='timeline'>
      <div className={styles.TitleWrapper}>
        <div className={styles.title}>
          Biography
        </div>
      </div>
      <Timeline position='alternate'> 
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary" fontSize='1.5rem'>
            1997年
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FaBaby fontSize='1.5rem'/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent fontSize='1.5rem'>
            出生
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent fontSize='1.5rem'>
            富山大学入学
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FaSchool fontSize='1.5rem' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color='text.secondary' fontSize='1.5rem'>
            2016年
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary' fontSize='1.5rem'>
            2020年
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FaPen fontSize='1.5rem' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent fontSize='1.5rem'>
            富山大学卒業<br />富山大学大学院入学
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent fontSize='1.5rem'>
            富山大学大学院卒業
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FaGraduationCap fontSize='1.5rem' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color='text.secondary' fontSize='1.5rem'>
            2022年
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary' fontSize='1.5rem'>
            2022年〜現在
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <MdComputer fontSize='1.5rem' />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent fontSize='1.5rem'>
            株式会社NTTドコモ　在籍
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      
    </div>
  );
}

export default TimeLine
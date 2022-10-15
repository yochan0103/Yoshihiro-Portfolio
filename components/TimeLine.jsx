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
          <TimelineOppositeContent 
            sx={{color:"text.secondary",
                 fontSize:'1.5rem',
                 '@media screen and (max-width:900px)':{
                    fontSize:'20px'
                 }
          }} >
            1997年
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FaBaby 
                sx={{fontSize:'1.5rem',
                    '@media screen and (max-width:900px)':{
                      fontSize:'20px'
                    }
              }}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent 
            sx={{fontSize:'1.5rem',
                "@media screen and (max-width:900px)":{
                  fontSize:"20px"
                }
            }}>
            出生
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent 
            sx={{fontSize:'1.5rem',
                '@media screen and (max-width:900px)':{
                  fontSize:'20px'
                }
          }}>
            富山大学入学
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FaSchool 
                sx={{fontSize:'1.5rem',
                    '@media screen and (max-width:900px)':{
                      fontSize:'20px'
                    }
            }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent 
            sx={{color:"text.secondary",
                 fontSize:'1.5rem',
                 '@media screen and (max-width:900px)':{
                    fontSize:'20px'
                  }
          }}>
            2016年
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent 
            sx={{color:"text.secondary",
                 fontSize:'1.5rem',
                 '@media screen and (max-width:900px)':{
                    fontSize:'20px'
                  }
          }}>
            2020年
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FaPen 
                sx={{fontSize:'1.5rem',
                    '@media screen and (max-width:900px)':{
                      fontSize:'20px'
                    }
            }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent 
            sx={{fontSize:'1.5rem',
                '@media screen and (max-width:900px)':{
                  fontSize:'20px'
                }
          }}>
            富山大学卒業<br />富山大学大学院入学
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent 
            sx={{fontSize:'1.5rem',
                '@media screen and (max-width:900px)':{
                  fontSize:'20px'
                }
          }}>
            富山大学大学院卒業
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FaGraduationCap 
                sx={{fontSize:'1.5rem',
                    '@media screen and (max-width:900px)':{
                      fontSize:'20px'
                    }
              }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent 
            sx={{color:"text.secondary",
                 fontSize:'1.5rem',
                 '@media screen and (max-width:900px)':{
                    fontSize:'20px'
                  }
          }}>
            2022年
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent 
            sx={{color:"text.secondary",
                 fontSize:'1.5rem',
                 '@media screen and (max-width:900px)':{
                    fontSize:'20px'
                  }
          }}>
            〜現在
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <MdComputer 
                sx={{fontSize:'1.5rem',
                    '@media screen and (max-width:900px)':{
                      fontSize:'20px'
                    }
            }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent 
            sx={{fontSize:'1.5rem',
                '@media screen and (max-width:900px)':{
                  fontSize:'20px'
                }
          }}>
            大手通信企業在籍
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      
    </div>
  );
}

export default TimeLine
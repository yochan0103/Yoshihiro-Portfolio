import styles from '../styles/Contact.module.css';
import { init, send } from 'emailjs-com';
import { useState } from 'react';
import { TextField, Grid, Button, Box } from '@mui/material';

const Contacts = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')

  const sendEMail = () => {
    const userID = '6WJX648GXnFLiH2UJ'
    const serviceID = 'service_3aucegd'
    const templateID = 'template_nqmurwc'

    if((userID != undefined) && (serviceID != undefined) && (templateID != undefined))
      {
          init(userID );
          const template_param = {
              from_name: name,
              email: mail,
              message: message
          };
          try {
            send(serviceID, templateID, template_param, userID)
            alert('送信しました')
            setName('')
            setMail('')
            setMessage('')
          } catch (error) {
          // 送信失敗したらalertで表示
            alert('送信できませんでした')
          }
      }
  }
  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeMail = (e) => {
    setMail(e.target.value)
  }
  const onChangeContent = (e) => {
    setMessage(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("push submit");
    sendEMail()
  }

  return (
    <div className={styles.ContentsWrapper} id='contacts'>
        <div className={styles.TitleWrapper}>
          <div className={styles.title}>Contact</div>
        </div>
        <Grid container justifyContent='center'>
            <form onSubmit={onSubmit}>
              <Box sx={{width:'40vw', m:3, 
                        '@media screen and (max-width:900px)':{
                          width:'90vw'
                          }
                      }} >
                  <label htmlFor="name">
                  お名前
                  </label>
                  <br />
                  <TextField
                  id="name"
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={onChangeName}
                  fullWidth
                  required
                  />
              </Box>
              <Box sx={{width:'40vw', m:3,
                        '@media screen and (max-width:900px)':{
                          width:'90vw'
                          }
              }}>
                  <label>
                  メールアドレス
                  </label>
                  <br />
                  <TextField
                  id="email"
                  type="text"
                  placeholder="your@examle.com"
                  value={mail}
                  onChange={onChangeMail}
                  fullWidth
                  required
                  />
              </Box>
              <Box sx={{width:'40vw', m:3,
                        '@media screen and (max-width:900px)':{
                          width:'90vw'
                          }
              }}>
                  <label>
                  お問い合わせ内容
                  </label>
                  <br />
                  <TextField
                  id="content"
                  value={message}
                  onChange={onChangeContent}
                  fullWidth
                  required
                  variant='outlined'
                  multiline
                  minRows='10'
                  />
              </Box>
              <Grid container justifyContent='center' mt='20px'>
                <Button
                  type="submit"
                  variant='outlined'
                  color='inherit'
                  style={{width:'8vw'}}
                >
                  送信
                </Button> 
              </Grid> 
            </form>
        </Grid>
    </div>
  );
}

export default Contacts
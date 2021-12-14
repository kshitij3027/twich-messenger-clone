



import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
} from 'stream-chat-react';
import Auth from './components/Auth'
import MessagingContainer from './components/MessagingContainer';
import '@stream-io/stream-chat-css/dist/css/index.css';
import Video from './components/Video';

const filters = { type: 'gaming' };
const options = { state: true, presence: true, limit: 10 };
const sort = { last_message_at: -1 };

const client = StreamChat.getInstance('nbccrq6sq9fh');

const App = () => {
  const [clientReady, setClientReady] = useState(false);
  const [channel,setChannel] = useState(null)
  const authToken = false;
  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: 'trey-anastasio',
            name: 'Trey Anastasio',
          },
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidHJleS1hbmFzdGFzaW8ifQ.M-L9xFTTRbpldOOpiOHeMssXNkWXTUrer9EY7AvPovM',
        );
        const channel = await client.channel('gaming', 'gaming-demo', {
          name: 'My Gaming App',
          members: ['dave-matthews', 'trey-anastasio'],
        })
        setChannel(channel);

        setClientReady(true);
      } catch (err) {
        console.log(err);
      }
    };

    setupClient();
  }, []);

  if (!clientReady) return null;




  return (
    <React.Fragment>
      {!authToken && <Auth/>}
      {authToken && <Chat client={client} darkMode={true}  >
      <Channel channel={channel}>
      <Video/>
        <MessagingContainer/>
      </Channel>
    </Chat>}
    </React.Fragment>
  );
};

export default App;

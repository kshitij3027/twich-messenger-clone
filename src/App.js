



import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from 'stream-chat-react';
import '@stream-io/stream-chat-css/dist/css/index.css';

const filters = { type: 'gaming' };
const options = { state: true, presence: true, limit: 10 };
const sort = { last_message_at: -1 };

const client = StreamChat.getInstance('nbccrq6sq9fh');

const App = () => {
  const [clientReady, setClientReady] = useState(false);
  const [channel,setChannel] = useState(null)
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
    <Chat client={client} darkMode={true}  >
      <ChannelList filters={filters} sort={sort} options={options} />
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;

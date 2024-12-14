import { Text, View } from 'react-native';

import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

export default function Index() {
  return (
    <GluestackUIProvider mode="light"><View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.fgfgggfgf to edit this screen.</Text>
      </View></GluestackUIProvider>
  );
}

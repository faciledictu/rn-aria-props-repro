import { useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Switch,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Each row: the web-style prop on the left, its accessibility* form on the
// right as the control. The letters tell the elements apart in the tree dump.

export default function App() {
  const [on, setOn] = useState({ a: false, b: false });

  return (
    <ScrollView contentContainerStyle={{ padding: 48, gap: 24 }}>
      <Text>Switch: A aria-label, B accessibilityLabel</Text>
      <View style={{ flexDirection: 'row', gap: 24 }}>
        <Switch
          aria-label="Wi-Fi A"
          value={on.a}
          onValueChange={a => setOn({ ...on, a })}
        />
        <Switch
          accessibilityLabel="Wi-Fi B"
          value={on.b}
          onValueChange={b => setOn({ ...on, b })}
        />
      </View>

      <Text>ActivityIndicator: C aria-label, D accessibilityLabel</Text>
      <View style={{ flexDirection: 'row', gap: 24 }}>
        <ActivityIndicator aria-label="Loading C" />
        <ActivityIndicator accessibilityLabel="Loading D" />
      </View>

      <Text>ScrollView: E aria-label, F accessibilityLabel</Text>
      <ScrollView horizontal aria-label="Photos E">
        <Text>Photo E1, Photo E2</Text>
      </ScrollView>
      <ScrollView horizontal accessibilityLabel="Photos F">
        <Text>Photo F1, Photo F2</Text>
      </ScrollView>

      <Text>TouchableOpacity: G role, H accessibilityRole</Text>
      <View style={{ flexDirection: 'row', gap: 24 }}>
        <TouchableOpacity role="button" onPress={() => {}}>
          <Text>Save G</Text>
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole="button" onPress={() => {}}>
          <Text>Save H</Text>
        </TouchableOpacity>
      </View>

      <Text>TouchableWithoutFeedback: I aria-label, J accessibilityLabel</Text>
      <View style={{ flexDirection: 'row', gap: 24 }}>
        <TouchableWithoutFeedback aria-label="Close I" onPress={() => {}}>
          <View>
            <Text>×</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          accessibilityLabel="Close J"
          onPress={() => {}}
        >
          <View>
            <Text>×</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Text>TouchableHighlight: K aria-checked, L accessibilityState</Text>
      <View style={{ flexDirection: 'row', gap: 24 }}>
        <TouchableHighlight
          accessibilityRole="checkbox"
          aria-checked
          onPress={() => {}}
        >
          <Text>Terms K</Text>
        </TouchableHighlight>
        <TouchableHighlight
          accessibilityRole="checkbox"
          accessibilityState={{ checked: true }}
          onPress={() => {}}
        >
          <Text>Terms L</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

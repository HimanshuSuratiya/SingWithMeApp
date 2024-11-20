import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CustomButton from '../Component/CustomButton';
import ProfileAvatar from '../Component/ProfileAvatar';
import CustomTextInput from '../Component/CustomTextInput';
import SmallNormal from '../Component/TextsComp/SmallNormal';
import {useTheme} from 'react-native-paper';
import SelectableAccordian from '../Component/SelectableAccordian';
import {
  Age,
  VocalRange,
  ExperienceLevels,
  Genres,
  Goals,
} from '../Utils/constants';

const FillProfileInfoScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <>
      <ScrollView style={styles.container}>
        <ProfileAvatar />
        <SmallNormal
          receiveStyle={{color: colors.SecondaryText}}
          title={'Enter your name'}
        />
        <CustomTextInput
          mode="outlined"
          label="Your name"
          receiveStyle={{marginTop: 8}}
        />
        <View style={styles.twoInputInSingle}>
          <View style={styles.inputView}>
            <SmallNormal
              receiveStyle={{color: colors.SecondaryText}}
              title={'Tell Us Your Age'}
            />
            <SelectableAccordian data={Age} />
          </View>
          <View style={styles.inputView}>
            <SmallNormal
              receiveStyle={{color: colors.SecondaryText}}
              title={'Your Vocal Range'}
            />
            <SelectableAccordian data={VocalRange} />
          </View>
        </View>
        <SmallNormal
          receiveStyle={{color: colors.SecondaryText}}
          title={'What’s Your Experience Level ?'}
        />
        <SelectableAccordian
          receiveStyle={{marginBottom: '8'}}
          data={ExperienceLevels}
        />

        <SmallNormal
          receiveStyle={{color: colors.SecondaryText}}
          title={'Select Your Favorite Genres'}
        />
        <SelectableAccordian receiveStyle={{marginBottom: '8'}} data={Genres} />

        <SmallNormal
          receiveStyle={{color: colors.SecondaryText}}
          title={'Set Your Music Goals'}
        />
        <SelectableAccordian receiveStyle={{marginBottom: '8'}} data={Goals} />

        <CustomButton filled={true} title="Save and Continue" />
      </ScrollView>
    </>
  );
};

export default FillProfileInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  twoInputInSingle: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'start',
  },
  inputView: {
    width: '48.5%',
    marginVertical: 16,
  },
});

/* eslint-disable react/prop-types */
import React from 'react';
import { View, ScrollView, Text } from 'react-native';

export default class TermsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Terms',
    title: 'Terms',
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      alignSelf: 'center',
    },
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
          }}
        >
          <Text>
            {`Business App End User License Agreement
This End User License Agreement (“Agreement”) is between you and Business App and governs use of this app made available through the Apple App Store. By installing the Business App, you agree to be bound by this Agreement and understand that there is no tolerance for objectionable content. If you do not agree with the terms and conditions of this Agreement, you are not entitled to use the Business App.
In order to ensure Business App provides the best experience possible for everyone, we strongly enforce a no tolerance policy for objectionable content. If you see inappropriate content, please use the “Report as offensive” feature found under each post.
1. Parties
This Agreement is between you and Business App only, and not Apple, Inc. (“Apple”). Notwithstanding the foregoing, you acknowledge that Apple and its subsidiaries are third party beneficiaries of this Agreement and Apple has the right to enforce this Agreement against you. Business App, not Apple, is solely responsible for the Business App  and its content.
2. Privacy
Business App may collect and use information about your usage of the Business App, including certain types of information from and about your device. Business App may use this information, as long as it is in a form that does not personally identify you, to measure the use and performance of the Business App .
3. Limited License
Business App grants you a limited, non-exclusive, non-transferable, revocable license to use theBusiness App for your personal, non-commercial purposes. You may only use theBusiness App on Apple devices that you own or control and as permitted by the App Store Terms of Service.
4. Age Restrictions
By using the Business App, you represent and warrant that (a) you are 17 years of age or older and you agree to be bound by this Agreement; (b) if you are under 17 years of age, you have obtained verifiable consent from a parent or legal guardian; and (c) your use of the Business App does not violate any applicable law or regulation. Your access to the Business App may be terminated without warning if Business App believes, in its sole discretion, that you are under the age of 17 years and have not obtained verifiable consent from a parent or legal guardian. If you are a parent or legal guardian and you provide your consent to your child’s use of the Business App , you agree to be bound by this Agreement in respect to your child’s use of the Business App.
5. Objectionable Content Policy
Content may not be submitted to Business App, who will moderate all content and ultimately decide whether or not to post a submission to the extent such content includes, is in conjunction with, or alongside any, Objectionable Content. Objectionable Content includes, but is not limited to: (i) sexually explicit materials; (ii) obscene, defamatory, libelous, slanderous, violent and/or unlawful content or profanity; (iii) content that infringes upon the rights of any third party, including copyright, trademark, privacy, publicity or other personal or proprietary right, or that is deceptive or fraudulent; (iv) content that promotes the use or sale of illegal or regulated substances, tobacco products, ammunition and/or firearms; and (v) gambling, including without limitation, any online casino, sports books, bingo or poker.
6. Warranty
Business App disclaims all warranties about the Business App to the fullest extent permitted by law. To the extent any warranty exists under law that cannot be disclaimed, Business App, not Apple, shall be solely responsible for such warranty.
7. Maintenance and Support
Business App does provide minimal maintenance or support for it but not to the extent that any maintenance or support is required by applicable law, Business App, not Apple, shall be obligated to furnish any such maintenance or support.
8. Product Claims
Business App, not Apple, is responsible for addressing any claims by you relating to the Business App or use of it, including, but not limited to: (i) any product liability claim; (ii) any claim that the Business App fails to conform to any applicable legal or regulatory requirement; and (iii) any claim arising under consumer protection or similar legislation. Nothing in this Agreement shall be deemed an admission that you may have such claims.
9. Third Party Intellectual Property Claims
Business App shall not be obligated to indemnify or defend you with respect to any third party claim arising out or relating to the Business App. To the extent Business App required to provide indemnification by applicable law, Business App, not Apple, shall be solely responsible for the investigation, defense, settlement and discharge of any claim that the Business App or your use of it infringes any third party intellectual property right.`}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

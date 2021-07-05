import { gql } from '@apollo/client';

export const FETCH_MORE_MESSAGES = gql`
  query fetchMoreMessages(
    $channelId: String!
    $messageId: String!
    $old: Boolean!
  ) {
    fetchMoreMessages(
      channelId: $channelId
      messageId: $messageId
      old: $old
    ) {
      text
      userId
      datetime
      messageId
    }
  }
`;

export const FETCH_LATEST_MESSAGES = gql`
  query fetchLatestMessages($channelId: String!) {
    fetchLatestMessages(channelId: $channelId) {
      text
      userId
      datetime
      messageId
    }
  }
`;

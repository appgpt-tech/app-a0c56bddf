//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Users: {
      name: 'Users',
      fields: {
        fullName: 'Full Name',
        address: 'Address',
        phoneNumber: 'Phone Number',
        location: 'Location',
        formerTasks: 'Former Tasks',
        currentTasks: 'Current Tasks',
        settings: 'Settings',
        id: 'id',
      },
    },
    Runners: {
      name: 'Runners',
      fields: {
        fullName: 'Full Name',
        address: 'Address',
        phoneNumber: 'Phone Number',
        location: 'Location',
        formerTasks: 'Former Tasks',
        currentTasks: 'Current Tasks',
        reviews: 'Reviews',
        ranking: 'Ranking',
        id: 'id',
      },
    },
    Tasks: {
      name: 'Tasks',
      fields: {
        description: 'Description',
        runnerCurrentLocation: 'Runner Current Location',
        taskStatus: 'Task Status',
        pickupLocation: 'Pickup Location',
        deliveryLocation: 'Delivery Location',
        estimatedPickupTime: 'Estimated Pickup Time',
        estimatedDeliveryTime: 'Estimated Delivery Time',
        itemDescription: 'Item Description',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Users: {
      name: 'Users (fr)',
      fields: {
        fullName: 'Full Name (fr)',
        address: 'Address (fr)',
        phoneNumber: 'Phone Number (fr)',
        location: 'Location (fr)',
        formerTasks: 'Former Tasks (fr)',
        currentTasks: 'Current Tasks (fr)',
        settings: 'Settings (fr)',
        id: 'id',
      },
    },
    Runners: {
      name: 'Runners (fr)',
      fields: {
        fullName: 'Full Name (fr)',
        address: 'Address (fr)',
        phoneNumber: 'Phone Number (fr)',
        location: 'Location (fr)',
        formerTasks: 'Former Tasks (fr)',
        currentTasks: 'Current Tasks (fr)',
        reviews: 'Reviews (fr)',
        ranking: 'Ranking (fr)',
        id: 'id',
      },
    },
    Tasks: {
      name: 'Tasks (fr)',
      fields: {
        description: 'Description (fr)',
        runnerCurrentLocation: 'Runner Current Location (fr)',
        taskStatus: 'Task Status (fr)',
        pickupLocation: 'Pickup Location (fr)',
        deliveryLocation: 'Delivery Location (fr)',
        estimatedPickupTime: 'Estimated Pickup Time (fr)',
        estimatedDeliveryTime: 'Estimated Delivery Time (fr)',
        itemDescription: 'Item Description (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);

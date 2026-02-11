# 2026 Monthly Mobile Metrics

- [January 2026 (1/1-1/31)](#january-2026)
- [February 2026 (2/1-2/28)](#februrary-2026)
- [March 2026 (3/1-3/31)](#march-2026)
- [April 2026 (4/1-4/30)](#april-2026)
- [May 2026 (5/1-5/31)](#may-2026)
- [June 2026 (6/1-6/30)](#june-2026)
- [July 2026 (7/1-7/31)](#July-2026)
- [August 2026 (8/1-8/31)](#August-2026)
- [September 2026 (9/1-9/30)](#September-2026)
- [October 2026 (10/1-10/31)](#October-2026)
- [November 2026 (11/1-11/30)](#November-2026)
- [December 2026 (12/1-12/31)](#December-2026)

## Where to gather the data

**Remember to update the date ranges for these links in the UI before pulling the data (the links are probably all set to February 2025)**
 
- Total downloads since launch
  - iOS, [appstore connect first time downloads](https://appstoreconnect.apple.com/analytics/app/ltd/1559609596/metrics?chartType=singleaxis&measureKey=units&zoomType=day)
  - Android, Google play console, [cumulative new users, 5 years](https://play.google.com/console/u/2/developers/7507611851470273082/app/4974294731909201030/statistics?metrics=USER_ACQUISITION-NEW-EVENTS-CUMULATIVE-DAY&dimension=COUNTRY&dimensionValues=OVERALL%2CUS%2CPR%2CPH%2CDE&dateRange=2020_3_21-2025_3_19&tab=APP_STATISTICS&ctpMetric=DAU_MAU-ACQUISITION_UNSPECIFIED-COUNT_UNSPECIFIED-CALCULATION_UNSPECIFIED-DAY&ctpDateRange=2025_2_18-2025_3_19&ctpDimension=COUNTRY&ctpDimensionValue=OVERALL&ctpPeersetKey=3%3A7098e2ceb59ccf42)
- New monthly downloads
  - iOS Installs (App Store Connect, [total first time downloads](https://appstoreconnect.apple.com/analytics/app/r:20250201:20250228/1559609596/metrics?chartType=singleaxis&measureKey=units&zoomType=day))
  - Android Installs ([Cumulative, new users, unique events](https://play.google.com/console/u/2/developers/7507611851470273082/app/4974294731909201030/statistics?metrics=USER_ACQUISITION-NEW-UNIQUE-CUMULATIVE-DAY&dimension=COUNTRY&dimensionValues=OVERALL%2CUS%2CPR%2CPH%2CDE&dateRange=2025_2_1-2025_2_28&tab=APP_STATISTICS&ctpMetric=DAU_MAU-ACQUISITION_UNSPECIFIED-COUNT_UNSPECIFIED-CALCULATION_UNSPECIFIED-DAY&ctpDateRange=2025_2_18-2025_3_19&ctpDimension=COUNTRY&ctpDimensionValue=OVERALL&ctpPeersetKey=3%3A7098e2ceb59ccf42)) 
- Monthly active users ([Firebase Overview](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20250201%26_u.date01%3D20250228%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22screen_view%22%7D&r=firebase-overview))
- Monthly new users (Google Analytics event, [first open](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20250201%26_u.date01%3D20250228%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22first_open%22%7D&r=events-overview)) (First_open events are logged the first time a new app is launched. So installing on a new device, uninstalling and reinstalling on the same device, or deleting local data for the app would all trigger this.)
- Monthly appointment detail views (Google Analytics event, [vama appt view details](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20250201%26_u.date01%3D20250228%26_u..nav%3Dmaui%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22vama_appt_view_details%22%7D&r=events-overview&collectionId=3022309925))
- Monthly Rx Refill (Google Analytics event, [vama rx refill success](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u..nav%3Dmaui%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22vama_rx_refill_success%22%7D%26_u.dateOption%3Dlast30Days&r=events-overview&collectionId=3022309925))
- Monthly Letter Downloads (Google Analytics event, [vama letter download](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u..nav%3Dmaui%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22vama_letter_download%22%7D%26_u.dateOption%3Dlast30Days&r=events-overview&collectionId=3022309925))
- Monthly Secure Messages Sent (Google Analytics event, [vama sm send message](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u..nav%3Dmaui%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22vama_sm_send_message%22%7D%26_u.dateOption%3Dlast30Days&r=events-overview&collectionId=3022309925))
- Monthly Veteran Status Views (Google Analytics, [pages & screens](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/explorer?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20250201%26_u.date01%3D20250228%26_u..nav%3Dmaui%26_r.explorerCard..startRow%3D0%26_r.explorerCard..filterTerm%3Dveteran&r=all-pages-and-screens&ruid=85114BBE-2F4B-42D6-AF54-5A24E62195CF&collectionId=3022309925))
- Average App Store Rating ([App store](https://apps.apple.com/us/app/va-health-and-benefits/id1559609596))
- Average Play Store Rating ([Play store](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US))

## December 2026

**Date range for metrics**: December 1, 2026 - December 31, 2026

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**:
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## November 2026

**Date range for metrics**: November 1, 2026 - November 30, 2026

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 


### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## October 2026

**Date range for metrics**: 

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## September 2026

**Date range for metrics**: September 1, 2026 - September 30, 2026

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## August 2026

**Date range for metrics**: August 1, 2026 - August 31, 2026

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## July 2026

**Date range for metrics**: July 1, 2026 - July 31, 2026

- **Total downloads since launch (01/01/2020)**:  
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## June 2026

**Date range for metrics**: June 1, 2026 - June 30, 2026

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## May 2026

**Date range for metrics**: May 1, 2026 - May 31, 2026

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## April 2026

**Date range for metrics**: April 1, 2026 - April 30, 2026

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## March 2026

**Date range for metrics**: March 1, 2026 - March 31, 2026

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## Februrary 2026

**Date range for metrics**: February 1, 2026 - February 28, 2026

- **Total downloads since launch (01/01/2020)**: 
- **New monthly downloads**: 
- **Monthly active users**: 
- **Monthly new users**: 
- **Monthly appointment detail views**: 
- **Monthly Rx Refill**: 
- **Monthly Letter Downloads**: 
- **Monthly Secure Messages Sent**: 
- **Monthly Veteran Status Views**: 

### Android

- **Android installs**: 
- **Average Play Store Rating**: 

### iOS

- **iOS Installs**: 
- **Average App Store Rating**: 

## January 2026

**Date range for metrics**: January 1, 2026 - January 31, 2026

- **Total downloads since launch (01/01/2020)**: 1,598,116(A) + 2,594,758(iOS) = 4,192,874
- **New monthly downloads**: 35,963(A) + 46,803(iOS) = 82,766
- **Monthly active users**: 1,702,990
- **Monthly new users**: 186,545
- **Monthly appointment detail views**: 8,584,358
- **Monthly Rx Refill**: 667,024
- **Monthly Letter Downloads**: 717,166
- **Monthly Secure Messages Sent**: 807,172
- **Monthly Veteran Status Views**: 651,213

### Android

- **Android installs**: 35,963
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 46,803
- **Average App Store Rating**: 4.8
  

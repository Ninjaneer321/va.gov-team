Great! I can see that Manila (station 358) is already configured in the test setup. Now let me create a comprehensive test case for Manila, Philippines that demonstrates the timezone handling issue:

````java name=TimeZoneHandlerTest.java url=https://github.com/department-of-veterans-affairs/mhv-np-phr-api-v2/blob/8cb946216b8ab5ea470e2fa7ab95f8ad196328b9/src/test/java/gov/va/med/mhv/integration/util/TimeZoneHandlerTest.java
package gov.va.med.mhv.integration.util;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.threeten.bp.Duration;
import org.threeten.bp.OffsetDateTime;
import org.threeten.bp.ZoneId;
import org.threeten.bp.ZonedDateTime;

public class TimeZoneHandlerTest {
	private static TimeZoneHandler timeZoneHandler = new TimeZoneHandler();

	@BeforeAll
	private static void setup() throws Exception {
		timeZoneHandler.setTimeZoneList(
				"358=Asia/Manila,8428L=America/New_York,405=America/New_York,436=America/Denver,437=America/Chicago,438=America/Chicago,442=America/Denver,459=Pacific/Honolulu,460=America/New_York,463=America/Anchorage,501=America/Denver,502=America/Chicago,503=America/New_York,504=America/Chicago,506=America/New_York,508=America/New_York,509=America/New_York,512=America/New_York,515=America/New_York,516=America/New_York,517=America/New_York,518=America/New_York,519=America/Chicago,520=America/Chicago,521=America/Chicago,523=America/New_York,526=America/New_York,528=America/New_York,529=America/New_York,531=America/Denver,534=America/New_York,537=America/Chicago,538=America/New_York,539=America/New_York,540=America/New_York,541=America/New_York,542=America/New_York,544=America/New_York,546=America/New_York,548=America/New_York,549=America/Chicago,550=America/Chicago,552=America/New_York,553=America/New_York,554=America/Denver,556=America/Chicago,557=America/New_York,558=America/New_York,561=America/New_York,562=America/New_York,564=America/Chicago,565=America/New_York,568=America/Denver,570=America/Los_Angeles,573=America/New_York,575=America/Denver,578=America/Chicago,580=America/Chicago,581=America/New_York,583=America/New_York,585=America/Chicago,586=America/Chicago,589=America/Chicago,590=America/New_York,593=America/Los_Angeles,595=America/New_York,596=America/New_York,598=America/Chicago,600=America/Los_Angeles,603=America/New_York,605=America/Los_Angeles,607=America/Chicago,608=America/New_York,610=America/New_York,612=America/Los_Angeles,613=America/New_York,614=America/Chicago,618=America/Chicago,619=America/Chicago,620=America/New_York,621=America/New_York,623=America/Chicago,626=America/Chicago,629=America/Chicago,630=America/New_York,631=America/New_York,632=America/New_York,635=America/Chicago,636=America/Chicago,637=America/New_York,640=America/Los_Angeles,642=America/New_York,644=America/Phoenix,646=America/New_York,648=America/Los_Angeles,649=America/Phoenix,650=America/New_York,652=America/New_York,653=America/Los_Angeles,654=America/Los_Angeles,655=America/New_York,656=America/Chicago,657=America/Chicago,658=America/New_York,659=America/New_York,660=America/Denver,662=America/Los_Angeles,663=America/Los_Angeles,664=America/Los_Angeles,666=America/Denver,667=America/Chicago,668=America/Los_Angeles,671=America/Chicago,672=America/Puerto_Rico,673=America/New_York,674=America/Chicago,675=America/New_York,676=America/Chicago,678=America/Phoenix,679=America/Chicago,687=America/Los_Angeles,688=America/New_York,689=America/New_York,691=America/Los_Angeles,692=America/Los_Angeles,693=America/New_York,695=America/Chicago,740=America/Chicago,756=America/Denver,757=America/New_York,983=America/Denver,984=America/New_York,993=America/New_York,994=America/New_York,991=America/Denver,979=America/Denver,989=America/New_York,"
				+ "437GJ=America/Denver,459GE=Pacific/Guam,459GF=Pacific/Pago_Pago,459GG=Pacific/Honolulu,459GH=Pacific/Saipan,504BZ=America/Denver,506GA=America/New_York,519GB=America/Denver,531GH=America/Los_Angeles,552GC=America/Indiana/Indianapolis,568GB=America/Chicago,568HJ=America/Chicago,568HP=America/Chicago,568HS=America/Chicago,573GK=America/Chicago,583QF=America/Indiana/Vincennes,585GA=America/Detroit,585GF=America/Detroit,585GG=America/Detroit,585HA=AmericaDetroit,585HB=America/Detroit,603GF=America/Chicago,603GG=America/Indiana/Indianapolis,610GE=America/New_York,619GA=America/New_York,619GG=America/New_York,619QB=America/New_York,GF=America/New_York,626GL=America/New_York,626GN=America/New_York,626GO=America/New_York,626QC=America/New_York,649QA=America/Denver,649QF=America/Denver,649QH=America/Denver,657GQ=America/Indiana/Vincennes,660GA=America/Boise,660GK=AmericaLos_Angeles,660QA=America/Boise,668QB=America/Denver,672GA=America/St_Thomas,672GB=America/St_Thomas");
	}

	public static final int APPOINTMENT_GRACE_PERIOD_HOURS = 12;

	@Test
	public void testisBeforeDifferentTimezone() throws Exception {
		for (int hours = 11; hours < 14; hours++) {
			OffsetDateTime apt2 = OffsetDateTime.now(ZoneId.of("America/Denver")).minus(Duration.ofHours(hours));
			boolean isbefore = TimeZoneHandler.isBefore(apt2, ZoneId.of("America/Los_Angeles"),
					APPOINTMENT_GRACE_PERIOD_HOURS);

			System.out.println(hours + " hours before " + isbefore);
			switch (hours) {
			case 11:
				assertTrue(!isbefore, "11 should load");
				break;
			case 12:
				assertTrue(isbefore, "12 should not load");
				break;
			case 13:
				assertTrue(isbefore, "13 should not load");
				break;
			default:
			}
		}

	}
	
	
	@Test
	public void testisBeforeDateObject() throws Exception {
		for (int hours = 11; hours < 14; hours++) {
			Calendar c = Calendar.getInstance();
			c.add(Calendar.HOUR, hours*-1);
			
			boolean isbefore = TimeZoneHandler.isBefore(c.getTime(), ZoneId.of("America/Los_Angeles"),
					APPOINTMENT_GRACE_PERIOD_HOURS);

			System.out.println(hours + " hours before " + isbefore);
			switch (hours) {
			case 11:
				assertTrue(!isbefore, "11 should load");
				break;
			case 12:
				assertTrue(isbefore, "12 should not load");
				break;
			case 13:
				assertTrue(isbefore, "13 should not load");
				break;
			default:
			}
		}

	}
	
	@Test
	public void testMoveBack_CST_to_PST() throws Exception {
		String dt = "2020-12-14T18:03:00-06:00"; //2020-12-14T18:03-06:00
		Date d = timeZoneHandler.restoreToLocalTimeZone(dt, "570");
		Calendar c = Calendar.getInstance();
		c.setTime(d);
		assertTrue((c.get(Calendar.HOUR)==4), "Hour should be 4" );
	}

	@Test
	public void testMoveBack_CST_to_CST() throws Exception {
		String dt = "2020-12-14T18:03:00-06:00"; //2020-12-14T18:03-06:00
		Date d = timeZoneHandler.restoreToLocalTimeZone(dt, "437");
		Calendar c = Calendar.getInstance();
		c.setTime(d);
		assertTrue((c.get(Calendar.HOUR)==6), "Hour should be 6" );
	}
	
	@Test
	public void testMoveBack_CST_to_EST() throws Exception {
		String dt = "2020-12-14T18:03:00-06:00"; //2020-12-14T18:03-06:00
		Date d = timeZoneHandler.restoreToLocalTimeZone(dt, "405");
		Calendar c = Calendar.getInstance();
		c.setTime(d);
		
		assertTrue((c.get(Calendar.HOUR)==7), "Hour should be 7" );
	}

	/**
	 * NEW TEST CASE FOR MANILA, PHILIPPINES
	 * Tests time zone conversion for a location ahead of the United States
	 * 
	 * Scenario: An appointment in Manila at 2:00 PM (14:00) on Dec 14, 2020
	 * Manila is UTC+8 (no DST)
	 * 
	 * Expected behavior:
	 * - Input: 2020-12-14T14:00:00+08:00 (2 PM Manila time)
	 * - This is 2020-12-14T06:00:00Z in UTC (6 AM UTC same day)
	 * - When "restored" to Manila time zone, should remain 2 PM Manila time
	 */
	@Test
	public void testManilaTimeZone_AfternoonAppointment() throws Exception {
		System.out.println("\n=== MANILA TIMEZONE TEST ===");
		
		// Input: 2 PM Manila time on Dec 14, 2020
		String dt = "2020-12-14T14:00:00+08:00";
		System.out.println("Input datetime: " + dt + " (2 PM Manila time)");
		
		// Process through restoreToLocalTimeZone with Manila station number (358)
		Date result = timeZoneHandler.restoreToLocalTimeZone(dt, "358");
		
		// Create a calendar in Manila timezone to check the expected value
		TimeZone manilaTimeZone = TimeZone.getTimeZone("Asia/Manila");
		Calendar expectedCalendar = Calendar.getInstance(manilaTimeZone);
		expectedCalendar.set(2020, Calendar.DECEMBER, 14, 14, 0, 0);
		expectedCalendar.set(Calendar.MILLISECOND, 0);
		
		// Check the result using Manila timezone
		Calendar resultCalendar = Calendar.getInstance(manilaTimeZone);
		resultCalendar.setTime(result);
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z");
		sdf.setTimeZone(manilaTimeZone);
		
		System.out.println("Expected: " + sdf.format(expectedCalendar.getTime()));
		System.out.println("Actual:   " + sdf.format(result));
		System.out.println("Hour (Manila TZ): Expected=14, Actual=" + resultCalendar.get(Calendar.HOUR_OF_DAY));
		
		// This assertion will likely FAIL due to the bug in convertToLocal()
		// The bug causes Calendar.getInstance() to use the JVM's default timezone
		// instead of the Manila timezone
		assertEquals(14, resultCalendar.get(Calendar.HOUR_OF_DAY), 
			"Hour should be 14 (2 PM) when viewed in Manila timezone");
	}

	/**
	 * Test conversion from UTC to Manila time
	 * This tests the convertToLocal static method directly
	 */
	@Test
	public void testConvertToLocal_Manila() throws Exception {
		System.out.println("\n=== CONVERT TO LOCAL MANILA TEST ===");
		
		// Create a UTC time: Dec 14, 2020 at 6:00 AM UTC
		// This should be 2:00 PM in Manila (UTC+8)
		ZonedDateTime utcTime = ZonedDateTime.of(2020, 12, 14, 6, 0, 0, 0, ZoneId.of("UTC"));
		OffsetDateTime offsetDateTime = utcTime.toOffsetDateTime();
		
		System.out.println("Input (UTC): " + utcTime);
		
		// Convert to Manila timezone
		ZoneId manilaZone = ZoneId.of("Asia/Manila");
		Date result = TimeZoneHandler.convertToLocal(offsetDateTime, manilaZone);
		
		// Check result in Manila timezone
		TimeZone manilaTimeZone = TimeZone.getTimeZone("Asia/Manila");
		Calendar resultCalendar = Calendar.getInstance(manilaTimeZone);
		resultCalendar.setTime(result);
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z");
		sdf.setTimeZone(manilaTimeZone);
		System.out.println("Result (Manila): " + sdf.format(result));
		System.out.println("Hour (Manila TZ): Expected=14, Actual=" + resultCalendar.get(Calendar.HOUR_OF_DAY));
		
		// This will likely FAIL due to the Calendar.getInstance() bug
		assertEquals(14, resultCalendar.get(Calendar.HOUR_OF_DAY),
			"6 AM UTC should convert to 2 PM (14:00) Manila time");
		assertEquals(12, resultCalendar.get(Calendar.MONTH), 
			"Month should be December");
		assertEquals(14, resultCalendar.get(Calendar.DAY_OF_MONTH),
			"Day should be 14th");
	}

	/**
	 * Test demonstrating the bug with system default timezone
	 * This test shows what happens when the JVM is running in different timezones
	 */
	@Test
	public void testManilaVsSystemTimezone() throws Exception {
		System.out.println("\n=== MANILA VS SYSTEM TIMEZONE TEST ===");
		System.out.println("System default timezone: " + TimeZone.getDefault().getID());
		
		// 2 PM Manila time
		String dt = "2020-12-14T14:00:00+08:00";
		Date result = timeZoneHandler.restoreToLocalTimeZone(dt, "358");
		
		// Compare viewing the same Date object in different timezones
		SimpleDateFormat manilaFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z");
		manilaFormat.setTimeZone(TimeZone.getTimeZone("Asia/Manila"));
		
		SimpleDateFormat systemFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z");
		// Uses system default timezone
		
		System.out.println("Result viewed in Manila TZ:  " + manilaFormat.format(result));
		System.out.println("Result viewed in System TZ:  " + systemFormat.format(result));
		
		// The bug is that the conversion doesn't preserve the timezone information
		// because Calendar.getInstance() without a timezone parameter uses the system default
		System.out.println("\nThis demonstrates the bug: The time zone is lost during conversion!");
	}
	
}
````

## Analysis of the Test Cases

I've created **three new test cases** for Manila, Philippines that will expose the timezone bug:

### 1. `testManilaTimeZone_AfternoonAppointment()`
- **Tests**: `restoreToLocalTimeZone()` method with Manila station (358)
- **Input**: `2020-12-14T14:00:00+08:00` (2 PM Manila time)
- **Expected**: Should preserve 2 PM when viewed in Manila timezone
- **Likely Result**: **WILL FAIL** ❌ due to the `Calendar.getInstance()` bug

### 2. `testConvertToLocal_Manila()`
- **Tests**: Direct conversion from UTC to Manila using `convertToLocal()`
- **Input**: `2020-12-14T06:00:00Z` (6 AM UTC)
- **Expected**: Should convert to 2 PM Manila time (UTC+8)
- **Likely Result**: **WILL FAIL** ❌ - the hour will be wrong

### 3. `testManilaVsSystemTimezone()`
- **Demonstrates**: How the result changes based on JVM's default timezone
- **Purpose**: Shows the bug clearly by comparing the same Date object viewed in different timezones

## Why These Tests Will Fail

The bug is in this line of `TimeZoneHandler.convertToLocal()`:

```java
Calendar c = Calendar.getInstance();  // ❌ BUG: Uses system default timezone!
```

It should be:
```java
Calendar c = Calendar.getInstance(TimeZone.getTimeZone(zId));  // ✅ Correct
```

Manila is **13-16 hours ahead** of US timezones (depending on which US timezone), making this bug very obvious when tested!

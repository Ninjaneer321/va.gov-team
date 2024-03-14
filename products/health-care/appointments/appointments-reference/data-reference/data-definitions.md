# Appointment Data Definitions

Reference for data that VAOS displays for different appointment types.


## General definitions

These data points show up across different appointment types.

### Appointment Date and Time

The day and time of the appointment. May be in the future or the past. 

## VA Booked Appointments

### Appointment Date and Time

See: `Appointment Date and Time`

**VAOS Notes**
The time displayed is in the facility's time zone.

### Instructions: How to Join

Instructions on how to join a telehealth appointment.

### Instructions: Prepare for Telehealth Visit

VAOS displays these instructions via `comment` field for `home video` and `atlas` appointments. The `comment` field contains instructions passed from Virtual care Manager (VCM). Right now, VAOS only accepts/support 2 types of instructions ('Video Visit Preparation' & 'Medication Review' instructions) due to limitations in the way data is passed to us in that field.Video visit instructions from Virtual Care Manager (VCM) instructions are suppressed if the instructions are any of the following:
  - `Message sent in MyHealtheVet`
  - `Resources Mailed to Patient`
  - `Signup for My HealtheVet  Message` 

#### Video Visit Preparation - Video at home

```
Before your appointment:
- If you're using an iPad or iPhone for your appointment, you'll need to download the VA Video Connect iOS app (https://itunes.apple.com/us/app/va-video-connect/id1224250949?mt=8) beforehand. If you're using any other device, you don't need to download any software or app before your appointment.
- You'll need to have access to a web camera and microphone. You can use an external camera and microphone if your device doesn't have one.

To connect to your Virtual Meeting Room at the appointment time, click the "Join session" button on this page or the link that's in your confirmation email.

To have the best possible video experience, we recommend you:
- Connect to your video appointment from a quiet, private, and well-lighted location
- Check to ensure you have a strong Internet connection before your appointment
- Connect to your appointment using a Wi-Fi network if using your mobile phone, rather than your cellular data network

```

#### Medication Review - ATLAS

```
Medication review
During your video appointment, your provider will want to review all the medications, vitamins, herbs, and supplements you're taking — no matter if you got them from another provider, VA clinic, or local store.
Please be ready to talk about your medications during your video visit to ensure you're getting the best and safest care possible.
```

### Location Information

Information about the facility and clinic where the appointment will take place. 

**VAOS Notes:**
It's rare, but if the call to the facilities fails, none of the location information will be returned.

#### Location Name

Name of the VA facility where the appointment is scheduled.

#### Location Address

Two-line address for the VA facility where the appointment is scheduled.

#### Facility Phone Number

The main phone number for the facility where the appointment has been scheduled. This is different from the `clinic phone number`.

#### Clinic Name

The name of the clinic where the appointment has been scheduled.

#### Patient-friendly Clinic Name

The same as clinic name but written so that it will make sense to the patient.

#### Clinic Location

The physical location of the clinic at the facility; for example, the building, floor, and room number.

#### Clinic Phone Number

The phone number for the clinic where the appointment takes place.


### Modality

AKA: `Method of attendance`

How a Veteran will attend an appointment, whether in-person, or through telehealth.


### Provider Name

The name of the facility staff who will be seeing/treating the Veteran.


### Type of Care

The type of assessment or treatment the Veteran will receive.

#### Display requirements 
How this field shows for VA appointments across scheduling touchpoints
<table>
<tr>
  <th>VAOS</td>
  <th>Check-in</th>
  <th>Mobile app</th>
</tr>
<tr>
  <td>
  <p>Notes: To display type of care VSP is using MFS to get clinical-services which includes stop codes. As of now that list of stop codes does not include all of the codes being used for some of the VistA appointments. These need to be manually mapped to care types to display.</p>

  VAOS displays type of care for VA appointments as follows: 

    <ul>
      <li>Type of Care for VA appointments must be set to the <code>serviceType</code> <strong>except</strong> when:
        <ul>
        <li><code>serviceType</code> is <code>NULL</code>, Front End will set type of care to <code>VA appointment</code>.</li>
        <li>OR<code>serviceCategory</code> is other than <code>regular</code>, Front End will set type of care to <code>VA appointment</code>.</li>
        </ul>
      </li>
      <li>Backend sets the <code>serviceType</code> when the stop codes from the remote procedure call match VATS service type (VAT or CCM stop codes).</li>
      <li>Type of Care may not be available for phone appointments and video appointments from Virtual Care Manager (VCM) and/or Telehealth Management Platform.</li>
      <li>A VistA appointment with an <code>APPOINTMENT TYPE = Compensation and Pension</code> must display in VAOS with <code>type of care = Compensation and pension exam</code>.</li> 
      </ul>    
  </td>
  <td> Check-in here </td>
  <td> Mobile app here </td>
</tr>
</table>


### Veteran Reason For Appointment

The Veteran-provided description of their needs to be addressed during this appointment.

## VA Requests



### Preferred Dates and Times


### Preferred Facility Information


#### Preferred Facility Name


#### Preferred Facility Address


#### Preferred Facility Phone Number


### Preferred Modality


### Requested Type of Care

### Veteran Contact Information


### Veteran Reason for Appointment


## Community Care Booked Appointments


### Appointment Date and Time

The day and time of the appointment. May be in the future or the past. The time displayed is in the facility's time zone.

### Type of Care


### Provider Name

VAOS Display Requirements:
- Frontend recieves the HSRM "Service Requested" data in the `practitioners:` field for communicaty care. 

### Treatment Specialty

VAOS Display Requirements:
- Front End receives the HSRM "Service Requested" data in the `serviceType` for community care.  HSRM "Service Requested" maps to CPRS/CTB Standard Episode of Care field which would be too cryptic for the user. So for now Type of Care is not being displayed for CC appointments and instead provider name is displaying.


### Provider Address


### Provider Phone Number


### Veteran Reason For Appointment

## Community Care Requests

### Type of Care


### Preferred Provider


### Preferred Dates and Times


### Veteran Reason for Appointment


### Veteran Contact Information


## Appointments homepage

### Default view - Upcoming 

#### Upcoming list logic 

Display the list of appointments: 

#### Clinic Name

# CVIX Image Types Retrieved by Legacy PHR Code

## Overview

This document describes the image/content types that the legacy My HealtheVet (MHV) PHR code retrieves from CVIX (Centralized VistA Imaging Exchange). This covers the legacy Java-based code in the `mhv-np-phr-api-v2` and `mhv-np-bluebutton-api` repositories — **not** the SCDF code.

## How Image Types Are Determined

The `CVIXClient` class fetches images from CVIX via the endpoint:

```
/ImageWebApp/image?{imageId}
```

When it receives a successful (HTTP 200) response, it reads the **`Content-Type` response header** from CVIX to determine the image type. It then uses a `lookupExtension()` method to map that content type to a file extension using a Spring-injected `extensionsMap`.

### Relevant Source Files

| Repository | File |
|---|---|
| `mhv-np-phr-api-v2` | `src/main/java/gov/va/med/mhv/integration/phr/client/cvix/CVIXClient.java` |
| `mhv-np-phr-api-v2` | `src/main/java/gov/va/med/mhv/integration/phr/client/cvix/model/ImageTO.java` |
| `mhv-np-phr-api-v2` | `src/main/resources/gov/va/med/mhv/phrmgr/config/phrmgr-context.xml` |
| `mhv-np-bluebutton-api` | `mhv-bluebutton-portal-main/src/main/java/gov/va/med/mhv/bluebutton/phr/service/cvix/client/CVIXClient.java` |
| `mhv-np-bluebutton-api` | `mhv-bluebutton-portal-main/src/main/java/gov/va/med/mhv/bluebutton/phr/service/cvix/client/ImageTO.java` |
| `mhv-np-bluebutton-api` | `mhv-bluebutton-portal-sb/src/main/resources/spring-rabbitmq-amqp.xml` |

### Code Flow

```java
// CVIXClient.fetchImage() — reads Content-Type from CVIX response
imageContentType = getResponseHeaderValue(httpConn, "Content-Type");
if (imageContentType.length() == 0) {
    imageContentType = getResponseHeaderValue(httpConn, "Content-type");
}

name = imageId.substring(pos2 + 1, pos3) + "." + lookupExtension(imageContentType);
imageTO = new ImageTO(name, imageContentType, response);
```

If the content type is not found in the extensions map, the extension defaults to `"unk"`.

## Supported Image Content Types

### Image MIME Types

| Content-Type | Extension | Format |
|---|---|---|
| `image/bmp` | `bmp` | Bitmap |
| `image/cgm` | `cgm` | Computer Graphics Metafile |
| `image/gif` | `gif` | GIF |
| `image/ief` | `ief` | Image Exchange Format |
| `image/jpeg` | `jpg` | JPEG |
| `image/png` | `png` | PNG |
| `image/svg+xml` | `svg` | SVG |
| `image/tiff` | `tif` | TIFF |
| `image/x-cmu-raster` | `ras` | CMU Raster |
| `image/x-icon` | `ico` | Icon |
| `image/x-portable-anymap` | `pnm` | Portable Anymap |
| `image/x-portable-bitmap` | `pbm` | Portable Bitmap |
| `image/x-portable-graymap` | `pgm` | Portable Graymap |
| `image/x-portable-pixmap` | `ppm` | Portable Pixmap |
| `image/x-rgb` | `rgb` | RGB |
| `image/x-xbitmap` | `xbm` | X Bitmap |
| `image/x-xpixmap` | `xpm` | X Pixmap |
| `image/x-xwindowdump` | `xwd` | X Window Dump |
| `image/x-targa` | `tga` | Targa |
| `image/j2k` | `j2k` | JPEG 2000 ¹ |

### Medical/DICOM Type

| Content-Type | Extension | Format |
|---|---|---|
| `application/dicom` | `dcm` | DICOM ¹ |

> ¹ **Note:** `image/j2k` (JPEG 2000) and `application/dicom` (DICOM) are present in the `mhv-np-bluebutton-api` extensions map but are **absent** from the `mhv-np-phr-api-v2` extensions map. They were likely added later to support radiology-specific formats.

### Non-Image Types Also in the Extensions Map

The full `extensionsMap` also includes non-image content types (documents, audio, video, etc.) since CVIX can return various artifact types. These include:

| Category | Content-Types |
|---|---|
| **Documents** | `application/pdf`, `application/msword`, `application/vnd.ms-excel`, `application/vnd.ms-powerpoint`, `text/plain`, `text/richtext`, `text/rtf` |
| **Audio** | `audio/basic`, `audio/midi`, `audio/mpeg`, `audio/x-aiff`, `audio/x-wav`, `audio/x-pn-realaudio` |
| **Video** | `video/mpeg`, `video/quicktime`, `video/x-msvideo` |
| **Web/Markup** | `application/xml`, `application/xhtml+xml`, `text/css`, `text/calendar` |
| **Archives** | `application/zip` |

## Study Query Filter Types

When querying CVIX for studies via `getStudiesResult()` / `getStudiesResultWithFilter()`, the `resultType` in the study filter XML can be one of:

| Result Type | Description |
|---|---|
| `all` | All study types (default) |
| `radiology` | Radiology studies only |
| `artifacts` | Artifact documents (e.g., After Visit Summaries) |

The default call (`getStudiesResult()`) uses `"all"`.

## CVIX Study XML Image Model

In addition to the MIME-based content type returned when fetching image bytes, the CVIX Study XML response includes an `imageType` field on each image element (within `FirstImage` and `Series > Images > Image`). This is a VistA Imaging classification string, separate from the HTTP Content-Type. The JAXB model fields for each image include:

- `diagnosticImageUri`
- `referenceImageUri`
- `thumbnailImageUri`
- `imageType` (VistA Imaging type classification)
- `imageStatus`
- `imageViewStatus`
- `dicomUid`
- `dicomImageNumber`
- `dicomSequenceNumber`

## ImageTO Data Model

The `ImageTO` transfer object carries three fields:

| Field | Type | Description |
|---|---|---|
| `name` | `String` | Constructed filename (e.g., `study-id.jpg`) |
| `imageType` | `String` | The MIME content type from the CVIX response header |
| `content` | `byte[]` | Raw image bytes |

---

*Document generated: 2026-04-10*
*Sources: `department-of-veterans-affairs/mhv-np-phr-api-v2` and `department-of-veterans-affairs/mhv-np-bluebutton-api`*

# 1095-B Annual Maintenance

1095-B templates are updated by the IRS annually. In addition to updating the year printed on the form, there can be other visual changes as well as invisible changes to how the PDF is encoded. Because of these changes, we must add the new template toward the end of each year, make any code changes necessary, and test the result to ensure that it displays the information correctly.

## Form Template Update Process

There is a reminder set in [the 1095-B alerts slack channel](https://dsva.slack.com/archives/C08H46U6FJN). It is currently set to remind us on October 1 of each year.

### Update the PDF Template

- PDF templates can be found on the [IRS PDF page](https://www.irs.gov/downloads/irs-pdf).
- The new PDF template file needs to be added to the vets-api [here](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/veteran_enrollment_system/form1095_b/templates/pdfs). Follow the file naming convention of the other files in the directory.
- Update the code to indicate which pdf encoding to use for the new year. In the [model file](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/veteran_enrollment_system/form1095_b/form1095_b.rb), you will see a map like:
```
PDF_ATTRIBUTES_FORMAT = {
  '2023': :pdf_attributes_v1,
  '2024': :pdf_attributes_v1,
  '2025': :pdf_attributes_v2
}.freeze
```
This maps years to the functions that are used to handle the pdf encoding. For example, the year 2025 uses the `pdf_attributes_v2` method for pdf encoding. You will most likely want to start by pointing it to the most recent version.
- Test locally:
An easy way of testing locally is to change these lines in the model:
```
tmp_file = Tempfile.new("1095B-#{SecureRandom.hex}.pdf")
generate_pdf(pdftk, tmp_file, template_path)
```
to write the data to the vets-api tmp folder:
```
tmp_file = Tempfile.new("1095B-#{SecureRandom.hex}.pdf")
tmp_file.write(Rails.root.join('tmp'))
generate_pdf(pdftk, tmp_file, template_path)
```
Then change the test object in the [specs](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/models/veteran_enrollment_system/form1095_b/form1095_b_spec.rb) to use the new tax year:
`let(:form1095b) { build(:enrollment_system_form1095_b, tax_year: {upcoming_tax_year} ) }`
- Run a test for the `pdf_file` method.
- Visually inspect the file found in the vets-api tmp directory for accuracy.

### Update the Text Template

- Make a copy of the most recent year's text file found [here](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/veteran_enrollment_system/form1095_b/templates/txts) and update the file name to reflect the year change.
- Open the text file. Find and replace all instances of the year.
- Visually inspect the newest PDF file against the previous year's PDF file and note any changes in the wording.
- Make those changes to the new text file.
- Test locally:
Similar to how the PDFs are tested, you will want to change the test object in the specs to use the new year.
`let(:form1095b) { build(:enrollment_system_form1095_b, tax_year: {upcoming_tax_year} ) }`
Then change the `VeteranEnrollmentSystem::Form1095B::Form1095B#txt_file` method to write the file locally.
From:
```
File.open(template_path, 'r') do |template_file|
  template_file.read % template_data.symbolize_keys
end
```
To:
```
tmp_file = File.open(template_path, 'r') do |template_file|
  template_file.read % template_data.symbolize_keys
end
File.write(Rails.root.join('tmp/text_file.txt'), tmp_file)
```
- Run a test for the `txt_file` method.
- Open the output file in the tmp directory and inspect for accuracy.

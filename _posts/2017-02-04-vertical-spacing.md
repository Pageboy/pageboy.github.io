---
layout: post
title: "Vertical Spacing for text: pBook and eBook"
date: '2017-02-04 22:50'
published: true
categories: [InDesign,Typography]
---
When we choose a value for _leading_ in InDesign, we are actually defining the distance between the baselines. The more traditional definition of leading is the space between the baseline and top of character container; the term coming from the little slabs of lead put between the type.

## Baseline Grid or Doing the maths?
InDesign has a super useful feature in paragraph styles; *Align to Grid*.
If you set this up correctly for your body text, then you will be guaranteed to get the lines of text to align across the spine and to 'back up' through the paper. Where the paper has any transparency at all, the lines of the body text should coincide back to back.

[![Here we see the baseline](/uploads/baseline.png)](/uploads/baseline.png)

Text should always align across the spine of a double page spread, whether for print or eBook. In print, text should also align where columns are used. To be be more specific, the main text or body text must align to an imaginary baseline across the spread. In print the lines of text should coincide through the page when held up to the light.

InDesign can help control this through the 'align to grid' in the paragraph style settings, however care must be taken with this method since it may not achieve the desired result for a double page view for a **reflowable** eBook.

## So how can we get the correct alignment for both pBook and eBook?

If a text consisted entirely of body text with no headings or sub headings then no problem exists in making both sides of the spine align, as long as the space between the paragraphs is either nothing or a multiple of the body text leading. All you will need is the text to start from the same position both _verso_ and _recto_ and alignment is achieved. The problem arises when the text is punctuated with other blocks of text for the headings, sub-headings or block quotes, or – you separate the paragraphs with a dimension that is not a multiple of the _body text leading_. If we are only dealing with print, then you can forget about aligning the headings to this grid, because the body text paragraphs will get back into alignment after the heading.

Since your type sizes and leading will use points (pts) then you can set the vertical units in InDesign’s preferences to `pts` also. This will then give you the benefit of being able to ensure that all vertical dimensions follow a multiple of the body text leading. **But beware.** You don’t want to set your preferences generally to use points for vertical units because you cannot (easily) set the page dimensions with points; for this you really need millimetres. So the _trick is to set the vertical units to points **after** you have started the document_ and set the paper size and the margins.

You will see from the first images here that we can interrupt the flow of the body text with sub headings or blockquotes that are not aligned to the baseline grid, and are positioned with space-before. The body text goes back to the grid after the heading or blockquote.

[![Body text is aligned to the grid](/uploads/bodytextalignedtogrid.png)](/uploads/bodytextalignedtogrid.png)

> Our body text uses 13pts leading so the space taken up by the subhead is 26pts, thus keeping the text aligned.

## What about the reflowable eBook?

InDesign can help us by providing this 'align to grid' feature, but eBooks (being HTML and CSS) do **not** understand 'align to grid'. eBooks need to use 'line-height' (leading) and margins to achieve this vertical alignment. In transferring vertical spacing from InDesign to the eBook export, leading becomes line-height and space-before and space-after becomes margin-bottom and margin-top in the CSS.

### Maths, but don't panic.

Getting the alignment correct for the body text will involve some maths and a consideration of vertical units.

The first problem that we encounter with *InDesign* is the units in use. Type is measured in points, whereas other dimensions (vertical and horizontal) are measured in more worldly units such as millimetres or inches. Since 1 point measures 0.352777778 millimetres, we don’t want to have to keep making this conversion!

The vertical position of the lines of text are dependent on:

- type size (font-size)
- the leading (line-height)
- space before the paragraph (margin-top)
- space after the paragraph (margin-bottom)

In the brackets at the end of these lines, we reveal what CSS in the ePub package is used to control the vertical space.


## In the reflowable eBook

### The body text

In the above illustration you see the baseline grid. In this InDesign example, this is set to 13.606 pt. An odd number, yes, but this is because it is set to be an exact 30th of the text block height; this is what the designer wants for print. When we are taking this to the reflowable ePub, the grid is ignored but the leading is not, so, we need to set the leading to something near to this baseline grid setting (13pt).

### Other block level elements

Headings and blockquotes are going to interrupt this vertical alignment, so we need to make sure that these elements use vertical space that is a multiple of the body text leading.[^1]

Say we have a sub heading that breaks the flow of the body text. We need to add together the space-before and space-after with the leading to get a multiple of the body-text leading.

> Our sub heading could have a font size of 16pts with leading of 17.5pts
> The space-before could be 6pts and the space-after 2.5pts. This then computes as follows:
> 17.5 + 2.5 + 6 = 26 - which a multiple of 13

With this calculation, our body text should be back in alignment after the heading.

## What about images in the text?

If we introduce an illustration that has text **before** and **after**, then this will upset the vertical alignment of the body text, unless we can size the vertical dimension of the image with a multiple of the leading.


[^1]: **Just to clarify**: InDesign will sort this out for print, because the body text will come back to the baseline grid, after these interruptions. But in the eBook, we need to explicitly set the spacing for these 'interruptions' to bring things back to the alignment.

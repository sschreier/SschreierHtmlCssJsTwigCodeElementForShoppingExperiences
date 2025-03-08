# An extension to providing a cms block and a cms element for html, css, js and twig code within a layout for Shopware 6

The extension _provides a cms block and a cms element for html, css, js and twig code under the block category **HTML**_ within a layout. 

If required, the _cms element can be used at any cms block_ as usual _using the corresponding icon_. 

_After enabling the twig compilation_, _you can_ also _use twig variables and snippets in the fields_.

This makes it possible to _personalize content in the shopping experiences_ or to _display customer, category or product data_.

## Display of the greeting from the sidebar of the customer account in a shopping experience
1. Place the cms block in the layout
2. Activate the switch _enable twig compiling for all fields_
3. Insert the following content into the field _html code_:

```
{% if context.customer %}
    <p class="welcome">
        {{ 'account.greetings'|trans|sw_sanitize }}
        {% if context.customer.salutation and context.customer.salutation.salutationKey != 'not_specified' %}
            {{ context.customer.salutation.translated.displayName }}
        {% endif %}
        {% if context.customer.title %}
            {{ context.customer.title }} 
        {% endif %}
        {{ context.customer.firstName }} {{ context.customer.lastName }}
    </p>
{% endif %}
```

## How to install the extension
### via console (recommended)
1. Download the latest _SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierHtmlCssJsTwigCodeElementForShoppingExperiences_.
3. Move the folder to the project folder _custom/plugins/_ .
4. Connect to the console via ssh:

```
bin/console plugin:refresh
bin/console plugin:install --activate SschreierHtmlCssJsTwigCodeElementForShoppingExperiences
```

### via composer
1. Add the repository URL to the composer.json of the project
```
"repositories": [
    ...,
    {
        "type": "vcs",
        "url": "https://github.com/sschreier/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences"
    }
],
```

2. Connect to the console via ssh and install the plugin source code via the command
```
composer require sschreier/sschreierhtmlcssjstwigcodeelementforshoppingexperiences
bin/console plugin:refresh
bin/console plugin:install --activate SschreierHtmlCssJsTwigCodeElementForShoppingExperiences
```

### via zip upload
1. Download the latest _SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierHtmlCssJsTwigCodeElementForShoppingExperiences_.
3. Zip the folder to _SschreierHtmlCssJsTwigCodeElementForShoppingExperiences.zip_.
4. Upload the zip in the Shopware Administration.
5. Install & Activate the extension.

#### extension update (zip)
1. Download the latest _SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierHtmlCssJsTwigCodeElementForShoppingExperiences_.
3. Zip the folder to _SschreierHtmlCssJsTwigCodeElementForShoppingExperiences.zip_.
4. Upload the zip in the Shopware Administration.
5. Update the extension.

## Images

### additional cms blocks and cms element part 1

![additional cms blocks and cms element part 1](https://www.sebastianschreier.de/plugins/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-Image1.jpg)

### additional cms blocks and cms element part 2

![additional cms blocks and cms element part 2](https://www.sebastianschreier.de/plugins/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-Image2.jpg)

### additional cms blocks and cms element part 3

![additional cms blocks and cms element part 3](https://www.sebastianschreier.de/plugins/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-Image3.jpg)

### additional cms blocks and cms element part 4

![additional cms blocks and cms element part 4](https://www.sebastianschreier.de/plugins/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-Image4.jpg)

### additional cms blocks and cms element part 5

![additional cms blocks and cms element part 5](https://www.sebastianschreier.de/plugins/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-Image5.jpg)

### additional cms blocks and cms element part 6

![additional cms blocks and cms element part 6](https://www.sebastianschreier.de/plugins/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-Image6.jpg)

### additional cms blocks and cms element part 7

![additional cms blocks and cms element part 7](https://www.sebastianschreier.de/plugins/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences/SschreierHtmlCssJsTwigCodeElementForShoppingExperiences-Image7.jpg)

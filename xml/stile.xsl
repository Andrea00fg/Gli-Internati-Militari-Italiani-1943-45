<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:dc="http://purl.org/dc/elements/1.1/">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title><xsl:value-of select="record/dc:title"/></title>
        <style>
          body { font-family: 'Segoe UI', sans-serif; background: #f5f2e7; color: #2c3e50; padding: 2em; }
          h1 { color: #8b0000; }
          .item { margin-top: 2em; }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="record/dc:title"/></h1>
        <div class="item">
          <p><strong>Autore:</strong> <xsl:value-of select="record/dc:creator"/></p>
          <p><strong>Data:</strong> <xsl:value-of select="record/dc:date"/></p>
          <p><strong>Luogo:</strong> <xsl:value-of select="record/dc:coverage"/></p>
          <p><strong>Fonte:</strong> <xsl:value-of select="record/dc:source"/></p>
          <p><strong>Descrizione:</strong> <xsl:value-of select="record/dc:description"/></p>
        </div>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>

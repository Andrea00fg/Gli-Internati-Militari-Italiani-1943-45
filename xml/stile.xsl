<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:dc="http://purl.org/dc/elements/1.1/">

  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head><title>Metadati - Cartolina</title></head>
      <body style="font-family: sans-serif; background-color: #fdfdfd; color: #333;">
        <h1><xsl:value-of select="metadata/dc:title"/></h1>
        <ul>
          <li><strong>Autore:</strong> <xsl:value-of select="metadata/dc:creator"/></li>
          <li><strong>Data:</strong> <xsl:value-of select="metadata/dc:date"/></li>
          <li><strong>Luogo:</strong> <xsl:value-of select="metadata/dc:coverage"/></li>
          <li><strong>Fonte:</strong> <xsl:value-of select="metadata/dc:source"/></li>
          <li><strong>Descrizione:</strong> <xsl:value-of select="metadata/dc:description"/></li>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

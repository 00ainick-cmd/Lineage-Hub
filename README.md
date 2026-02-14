# Lineage Research Hub

Evidence-based genealogy research, powered by AI.

## What This Is

A suite of tools for serious genealogical research, built on the principle that **nothing is a fact — everything is a claim backed by evidence from a source.**

Family Lines: **BROWN** · **CHANEY** · **CRAWLEY** · **HESS**

## Tools

### 🔄 GEDCOM Converter
Import your family tree from Ancestry, FamilySearch, MyHeritage, or any GEDCOM-compatible source. Converts GEDCOM 5.5/5.5.1 to the Lineage JSON schema with proper entity separation (Individuals, Events, Sources, Claims).

### 🔍 Research Assistant
AI-powered research tools including:
- Biographical narrative generation from evidence
- Brick wall analysis with targeted search strategies
- Source finder with direct search URLs for major repositories
- Conflict detection between sources
- GPS (Genealogical Proof Standard) scoring

### 📄 Document Processor
Upload and process historical documents:
- Census records, vital records, military records
- Newspaper clippings, church records, probate files
- OCR/transcription with AI assistance
- Automatic entity extraction (people, dates, places)
- Source citation generation

### 🌳 Family Tree
Interactive pedigree chart visualization with research status indicators.

## The Evidence Model

```
SOURCE (document)
    └── provides EVIDENCE for
            └── CLAIM (assertion about a person)
                    └── with CONFIDENCE rating
```

Confidence Levels:
- 🟢 **Proven** — Multiple independent primary sources agree
- 🟡 **Probable** — Primary source, no contradicting evidence
- 🟠 **Possible** — Secondary source or single piece of evidence
- 🔴 **Questionable** — Contradicted by other evidence or unreliable source

## Data Schema

All data follows the Lineage schema:
- **Individuals** — People with names, relationships, and research status
- **Events** — Things that happened (births, deaths, marriages, etc.)
- **Sources** — Documents and records that provide evidence
- **Claims** — Assertions linking individuals to evidence with confidence ratings

## Stack

- Frontend: Static HTML/CSS/JS (GitHub Pages)
- Data: JSON files (client-side)
- Future: Supabase integration for persistent storage and collaboration

## License

Private research tool. © 2026 Nick Brown.

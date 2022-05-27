/*******************************************************************************
   Confidential
  
  2018 
  All Rights Reserved.
  
  This file is subject to the terms and conditions defined in
  file 'license.txt', which is part of this source code package.
   
  Contributors :
         - General Release
 ******************************************************************************/
package com.harbormaster.controller;

import java.util.concurrent.atomic.AtomicLong;

/** 
 * Base class of all application Spring Controller classes.
 *
 * @author $aib.getAuthor()
 */
public class BaseSpringRestController
{
	protected AtomicLong counter()
	{ return counter; }
	
	protected void logMessage( String msg )
	{
		System.out.println( msg );
	}
	
	private final AtomicLong counter = new AtomicLong();
}




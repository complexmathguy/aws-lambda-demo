/*******************************************************************************
   Confidential
  
  2018 
  All Rights Reserved.
  
  This file is subject to the terms and conditions defined in
  file 'license.txt', which is part of this source code package.
   
  Contributors :
         - General Release
 ******************************************************************************/
package com.harbormaster.primarykey;

import java.util.*;


/**
 * Base class for application PrimaryKey classes.
 * 
 * @author    $aib.getAuthor()
 */
public abstract class BasePrimaryKey
{
	// for backward compatibility
    public Collection valuesAsCollection()
    {
        return (keys());
    }
    
    public abstract List keys();
    public abstract Object getFirstKey();
    
    public boolean hasBeenAssigned()
    {
    	return( getFirstKey() != null );
    }
}


